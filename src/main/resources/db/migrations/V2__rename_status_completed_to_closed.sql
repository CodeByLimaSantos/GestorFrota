-- Migrate rental status: COMPLETED → CLOSED
UPDATE TB_RENTALS SET status = 'CLOSED' WHERE status = 'COMPLETED';

-- Migrate driver status: old values → new values
UPDATE TB_DRIVERS SET status = 'WAITING' WHERE status = 'ACTIVE';
UPDATE TB_DRIVERS SET status = 'ON_RENTAL' WHERE status = 'RENTED';
UPDATE TB_DRIVERS SET status = 'WAITING' WHERE status = 'ON_HOLD';
-- INACTIVE stays INACTIVE

