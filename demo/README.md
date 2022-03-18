# dartulator

- ## Aufgaben (Meilensteine, Tasks)

    1. setup repository: in arbeit
    2. Hauptansicht MVP (ganz einfach, version 1) erstellen: nicht begonnen
        - simulierte Dartscheibe
        - klicken auf einzelne Felder -> JS läuft

- ## Organisationsregeln (empfohlen von Don)
    - ### Git Branches:
        1. am `main` oder `master` Branch nur funktionierende sinnvolle Commits, keine Experimente usw.
        2. jeder branch (außer `master`, `main`) hat die Struktur `{ART}-{JAHR}-{MONAT}-{LAUFENDE NUMMER}-{BEZEICHNUNG}`
            - z.B. `feature-22-03-001-bei-60-in-1-blinken`, `documentation-22-03-001-user-manual`, `bugfix-22-03-001-scheibe-nach-neuladen-verkehrt`
        3. nur Kleinbuchstaben, Ziffern und `-` im Branch-Name (kein `--`, `.`, `_`, ` `, ...)
        4. die laufende Nummer fängt jedes Monat von vorne an
        5. Branch-Art `experimental` für Coding-Versuche

    - ### CSS Class- & ID-Names
        - (kann nocht gemacht werden)
        - z.B. nur `-` oder nur `_` im Name, nur Kleinbuchstaben