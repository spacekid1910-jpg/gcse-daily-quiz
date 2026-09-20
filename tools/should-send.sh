#!/usr/bin/env bash
# Prints "true" if it is send time in the UK (08:xx on weekdays, 11:xx at weekends), otherwise "false".
# GitHub's scheduler runs on UTC, so the workflow fires at both possible UTC hours (GMT and BST)
# and this check lets only the correct one through.
# For testing, set UK_HOUR (0-23) and UK_DOW (1=Mon ... 7=Sun).
set -eu
H="${UK_HOUR:-$(TZ=Europe/London date +%H)}"
H=$((10#$H))
D="${UK_DOW:-$(TZ=Europe/London date +%u)}"

if [ "$D" -le 5 ] && [ "$H" -eq 8 ]; then
  echo true
elif [ "$D" -ge 6 ] && [ "$H" -eq 11 ]; then
  echo true
else
  echo false
fi
