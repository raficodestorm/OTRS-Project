-- ===================================================
-- Create Database
-- ===================================================
CREATE DATABASE IF NOT EXISTS `ranar_bus`
    DEFAULT CHARACTER SET utf8mb4
    DEFAULT COLLATE utf8mb4_unicode_520_ci;

USE `ranar_bus`;

-- ===================================================
-- USERS
-- ===================================================
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    phone VARCHAR(20) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password_hash TEXT NOT NULL,
    full_name VARCHAR(255),
    role VARCHAR(20) NOT NULL DEFAULT 'passenger'
        CHECK (role IN ('passenger', 'operator', 'driver', 'admin')),
    is_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- OPERATORS
-- ===================================================
CREATE TABLE operators (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    name VARCHAR(255) NOT NULL,
    license_number VARCHAR(100) UNIQUE,
    verified BOOLEAN DEFAULT false,
    contact_info JSONB,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- DRIVERS
-- ===================================================
CREATE TABLE drivers (
    id BIGSERIAL PRIMARY KEY,
    operator_id BIGINT NOT NULL REFERENCES operators(id) ON DELETE CASCADE ON UPDATE CASCADE,
    full_name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    license_number VARCHAR(100) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'active'
        CHECK (status IN ('active','inactive','suspended')),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- ROUTES
-- ===================================================
CREATE TABLE routes (
    id BIGSERIAL PRIMARY KEY,
    origin VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    distance_km INT,
    approx_duration INTERVAL,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- BUS STOPS (optional improvement)
-- ===================================================
CREATE TABLE bus_stops (
    id BIGSERIAL PRIMARY KEY,
    route_id BIGINT NOT NULL REFERENCES routes(id) ON DELETE CASCADE,
    stop_name VARCHAR(255) NOT NULL,
    sequence INT NOT NULL,
    arrival_time TIMESTAMP,
    departure_time TIMESTAMP
);

-- ===================================================
-- BUSES
-- ===================================================
CREATE TABLE buses (
    id BIGSERIAL PRIMARY KEY,
    operator_id BIGINT NOT NULL REFERENCES operators(id) ON DELETE CASCADE ON UPDATE CASCADE,
    registration_number VARCHAR(50) UNIQUE NOT NULL,
    model VARCHAR(100),
    seat_layout JSONB NOT NULL,
    total_seats INT NOT NULL,
    amenities JSONB,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- TRIPS
-- ===================================================
CREATE TABLE trips (
    id BIGSERIAL PRIMARY KEY,
    bus_id BIGINT NOT NULL REFERENCES buses(id) ON DELETE CASCADE ON UPDATE CASCADE,
    route_id BIGINT NOT NULL REFERENCES routes(id) ON DELETE CASCADE ON UPDATE CASCADE,
    driver_id BIGINT REFERENCES drivers(id) ON DELETE SET NULL ON UPDATE CASCADE,
    departure_time TIMESTAMP NOT NULL,
    arrival_time TIMESTAMP,
    base_fare NUMERIC(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'scheduled'
        CHECK (status IN ('scheduled','ongoing','completed','cancelled')),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- BOOKINGS
-- ===================================================
CREATE TABLE bookings (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    trip_id BIGINT NOT NULL REFERENCES trips(id) ON DELETE CASCADE ON UPDATE CASCADE,
    total_amount NUMERIC(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending'
        CHECK (status IN ('pending','confirmed','cancelled','completed')),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- BOOKING SEATS
-- ===================================================
CREATE TABLE booking_seats (
    id BIGSERIAL PRIMARY KEY,
    booking_id BIGINT NOT NULL REFERENCES bookings(id) ON DELETE CASCADE ON UPDATE CASCADE,
    seat_id VARCHAR(50) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'reserved'
        CHECK (status IN ('reserved','confirmed','cancelled'))
);

-- ===================================================
-- PAYMENTS
-- ===================================================
CREATE TABLE payments (
    id BIGSERIAL PRIMARY KEY,
    booking_id BIGINT NOT NULL REFERENCES bookings(id) ON DELETE CASCADE ON UPDATE CASCADE,
    provider VARCHAR(50) NOT NULL,
    provider_payment_id VARCHAR(255),
    amount NUMERIC(10,2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'BDT',
    status VARCHAR(20) NOT NULL
        CHECK (status IN ('pending','success','failed','refunded')),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- COUPONS
-- ===================================================
CREATE TABLE coupons (
    id BIGSERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    description TEXT,
    discount_type VARCHAR(20) NOT NULL CHECK (discount_type IN ('fixed','percentage')),
    discount_value NUMERIC(10,2) NOT NULL,
    valid_from TIMESTAMP,
    valid_to TIMESTAMP,
    usage_limit INT,
    used_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- LOYALTY POINTS
-- ===================================================
CREATE TABLE loyalty_points (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    points INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- AUDIT LOGS
-- ===================================================
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id) ON DELETE SET NULL ON UPDATE CASCADE,
    action VARCHAR(255) NOT NULL,
    details JSONB,
    created_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- FEEDBACKS
-- ===================================================
CREATE TABLE feedbacks (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    trip_id BIGINT REFERENCES trips(id) ON DELETE CASCADE ON UPDATE CASCADE,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT now()
);

-- ===================================================
-- NOTIFICATIONS
-- ===================================================
CREATE TABLE notifications (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
    message TEXT NOT NULL,
    read_status BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT now()
);


-- ===================================================
-- INDEXES
-- ===================================================
CREATE INDEX idx_users_phone ON users(phone);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_trips_departure ON trips(departure_time);
CREATE INDEX idx_trips_status ON trips(status);
CREATE INDEX idx_bookings_user ON bookings(user_id);
CREATE INDEX idx_bookings_trip ON bookings(trip_id);
CREATE INDEX idx_payments_booking ON payments(booking_id);
CREATE INDEX idx_routes_origin_destination ON routes(origin, destination);
CREATE INDEX idx_loyalty_user ON loyalty_points(user_id);
CREATE INDEX idx_feedback_trip ON feedbacks(trip_id);
CREATE INDEX idx_drivers_phone ON drivers(phone);
CREATE INDEX idx_operators_license ON operators(license_number);

