document.addEventListener('DOMContentLoaded', () => {
    var date = (new Date("2022-04-26").getTime() / 1000 - new Date().getTime() / 1000);
    var twoDaysFromNow = (new Date().getTime() / 1000) + date;
    var flipdown = new FlipDown(twoDaysFromNow, {
        theme: 'dark',
    }).start()
      .ifEnded(() => {
        console.log('The countdown has ended!');
      });
  });
  