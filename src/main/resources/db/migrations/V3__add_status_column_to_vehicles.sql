-- Add status column to TB_VEHICLES with default AVAILABLE
ALTER TABLE TB_VEHICLES ADD COLUMN IF NOT EXISTS status VARCHAR(255) DEFAULT 'AVAILABLE';

-- Set all existing vehicles without status to AVAILABLE
UPDATE TB_VEHICLES SET status = 'AVAILABLE' WHERE status IS NULL;

-- Mark vehicles that currently have an ACTIVE rental as RENTED
UPDATE TB_VEHICLES v
SET v.status = 'RENTED'
WHERE v.Id_gerado_sequencialmente IN (
    SELECT DISTINCT r.vehicle_id
    FROM TB_RENTALS r
    WHERE r.status = 'ACTIVE'
);

