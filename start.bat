@echo off
cd /d "%~dp0"
echo Starting Sansad Showdown Game Server...
python serve.py 8000
pause
