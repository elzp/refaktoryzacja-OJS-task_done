# Przeprogramowani.pl - Opanuj JavaScript

Moduł III. - W świecie frameworków

## Ćwiczenie nr. 5 - Refaktoryzacja

### Jak zacząć

Kliknij przycisk "Fork" u góry edytora aby skopiować ćwiczenie.

### Cel ćwiczenia

Pewien programista, który nie pracował do tej pory z komponentami, postanowił zaimplementować tzw. "TODO listę" w Angularze postaci jednego komponentu. Niestety, aplikacja napisana w ten sposób jest bardzo trudna do utrzymania, dlatego zgłosiłeś się do poprawienia struktury całego rozwiązania.

Logika aplikacji znajduje się w pliku `app.component.ts`, a twoim zadaniem jest wydzielenie poszczególnych jej fragmentów do dedykowanych komponentów zgodnie z odpowiedzialnością poszczególnych fragmentów aplikacji:

1) TaskCreatorComponent - komponent do dodawania nowych zadań
2) TasksListComponent - komponent prezentujący listę tasków - powinien być możliwy do skonfigurowania (ukończone/pozostałe) i zostać użyty dwukrotnie
3) TasksCounterComponent - komponent prezentujący liczbę przekazanych do niego zadań w porównaniu do wszystkich dostępnych (np. 2/10)

Po wprowadzeniu powyższych komponentów zachowanie aplikacji nie powinno się zmienić.