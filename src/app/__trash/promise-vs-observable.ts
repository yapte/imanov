// Request https://.... body {qwerty: 123}
    // OK functionOk()
    // ERR functionHuevo()

// PROMISE
// fetch({
//     url: 'https://....',
//     method: 'POST',
//     body: { qwerty: 123 },
// }).then({
//     OK: functionOk(),
//     ERR: functionHuevo(),
// });

// //  OBSERVABLE
// http.post('https://....', { qwerty: 123 })
//     .subscribe({
//         next: functionOk1(),
//         error: functionHuevo3(),
//         complete: complete(),
//     });