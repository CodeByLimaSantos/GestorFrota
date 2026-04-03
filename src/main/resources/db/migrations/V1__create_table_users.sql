CREATE TABLE users (
    id BINARY(16) NOT NULL DEFAULT (UUID_TO_BIN(UUID())),
    username VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY uk_username (username)
);