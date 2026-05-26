@echo off
REM Delegates to the nested module's Maven wrapper so you can run commands from the outer folder.
setlocal enabledelayedexpansion
set ROOT_DIR=%~dp0
set NESTED_WRAPPER=%ROOT_DIR%experiment_11\mvnw.cmd
nif not exist "%~dp0\experiment_11\mvnw.cmd" (
  echo Nested mvnw.cmd not found at "%~dp0\experiment_11\mvnw.cmd"
  exit /b 1
)
pushd "%~dp0\experiment_11"
call "mvnw.cmd" -f "pom.xml" %*
set EXITCODE=%ERRORLEVEL%
popd
exit /b %EXITCODE%
