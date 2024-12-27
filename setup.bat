@echo off 
chcp 65001 >nul

start /b pip install -r requirements.txt > dependenciesLog.log 2>&1

setlocal enabledelayedexpansion
set dots=.

:loading
tasklist | find /i "pip.exe" >nul
if %errorlevel%==0 (
    cls
    echo Instalando dependências... Isto pode levar alguns minutos.
    <nul set /p "=!dots!"
    timeout /t 1 >nul

    if "!dots!"=="." (
        set dots=..
    ) else if "!dots!"==".." (
        set dots=...
    ) else (
        set dots=.
    )
    goto loading
)

cls
echo Dependências instaladas com sucesso!
pause