@echo off
REM Wrapper to forward mvnw commands to nested experiment_12 module
setlocal
if exist "%~dp0experiment_12\mvnw.cmd" (
    "%~dp0experiment_12\mvnw.cmd" %*
) else (
    echo Nested mvnw.cmd not found at "%~dp0experiment_12\mvnw.cmd"
    exit /b 1
)
