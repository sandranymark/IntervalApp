![image](https://github.com/user-attachments/assets/38d6a77d-309d-427e-922a-433c9b3f18d8)

## Uppdragsbeskrivning  
Ert uppdrag är att skapa en ultimat tidtagnings-webbapp för mobiler. Den är enkel till sin funktion, men kan visa tid på flera olika sätt. Se vybeskrivningar samt skärmdumpar nedan.

Viss remix av utseendet får göras, till exempel lägga till färger, ändra fonter etc., dock ska funktionalitet och övergripande layout vara densamma.

## Funktionella krav

**Vy** | **Beskrivning**
--- | ---
**Loading** | En "loading"-skärm där endast logotyp samt slogan visas. Du kommer vidare till *Set Timer* genom att klicka på logotypen.
**Set Timer** | Här ställer du in hur många minuter timern ska gå. **VG-krav:** Du anger också om timern ska gå i intervaller, dvs. starta om efter att den nått noll. Valet att lägga in en 5-minuters paus mellan varje intervall finns också. Detta är användbart för exempelvis studier med Pomodoro-metoden eller när man parprogrammerar.
**Analog Timer** | Här visas tiden med en analog urtavla där minut- och sekundvisaren rör sig. En knapp för att avbryta nuvarande timer och återgå till *Set Timer* ska finnas.
**Digital Timer** | Här visas tiden med en digital klocka som uppdateras varje sekund. En knapp för att avbryta nuvarande timer och återgå till *Set Timer* ska finnas.
**Alarmvy** | Denna vy visas när tiden är slut. En knapp för att återgå till *Set Timer* ska finnas.
**Text Timer** (VG) | Tiden visas med hjälp av skriven text.

På samtliga timervyer ska det finnas en menyikon i hörnet som visar en meny där användaren kan växla mellan olika timervyer. Notera att dessa byten inte ska avbryta eller nollställa timern.


## Tekniska krav
- Att jobba med tid i programmering kan snabbt bli komplext. Därför rekommenderas det starkt att använda ett bibliotek som underlättar, t.ex. **EasyTimer.js** av Albert Gonzalez.
- Applikationen ska byggas i antingen **React** med **Framer Motion** eller i **HTML, CSS och vanilla JS** med **Anime.js**.
- Använd någon CSS-animering (transitions eller keyframes) någonstans i applikationen.



