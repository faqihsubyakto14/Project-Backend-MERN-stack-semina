const startTime = new Date(Date.now() + 5000);
const endTime = new Date(startTime.getTime() + 5000);
const job = schedule.scheduleJob(
  { start: startTime, end: endTime, rule: '*/1 * * * * *' },
  function () {
    console.log('Time for tea!');
  }
);

// mongodb+srv://Faqihsubyakto:brandal1234@cluster0.fnlyqwg.mongodb.net/?retryWrites=true&w=majority