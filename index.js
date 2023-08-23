
var submitButton = document.getElementById("submitButton");


function checkInputs() {
  let inputYear = document.getElementById("Year");
  let inputYearValue = inputYear.value;
  let inputSub = document.getElementsByName("subject");
  let selectedSub = '';

  for (let i = 0; i < inputSub.length; i++) {
      if (inputSub[i].checked) {
          selectedSub = inputSub[i].value;
      }
  }

  let submitButton = document.getElementById("submitButton");
  if (inputYearValue !== '' && selectedSub !== '') {
      submitButton.classList.remove("disabled");
  } else {
      submitButton.classList.add("disabled");
  }
}

document.getElementById("Year").addEventListener("input", function() {
  checkInputs();
});

function submit() {
  let inputYear = document.getElementById("Year");
  let inputYearValue = inputYear.value;
  let inputSub = document.getElementsByName("subject");
  var selectedSub = '';
  for (var i = 0; i < inputSub.length; i++) {
    if (inputSub[i].checked) {
      selectedSub = inputSub[i].value;
    }
  }
  if (((inputYearValue !== '2018' && inputYearValue !== '2019' && inputYearValue !== '2020' && inputYearValue !== '2021' && inputYearValue !== '2022'))&&(selectedSub !== '')) {
    alert('Enter valid year');
    return;
  }
  //if ((selectedSub === '')&&(inputYearValue!=='')) {
  // alert('Click on any Subject');
  //  return;
 // }
  if (inputYearValue === '2020') {
    alert('Exams have been cancelled in 2020 due to pandemic');
    return;
  }
  else if (inputYearValue === '2018' && selectedSub === 'Telugu') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1TCRHP-4CQcbPx5eQacfHUdw2Bx9gLPEt/view?usp=share_link");
  }
  else if (inputYearValue === '2018' && selectedSub === 'Hindi') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/18fagEse1ts34TjwM37OhsDfIsnJuVvGE/view?usp=share_link");
  }
  else if (inputYearValue === '2018' && selectedSub === 'English') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1312T3J1xOoBsJmu6OE9_szITNUz452FH/view?usp=share_link");
  }
  else if (inputYearValue === '2018' && selectedSub === 'Maths') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/18XcG4KRsj1NZmpqPspQqCHa4kud2DJAL/view?usp=share_link");
  }
  else if (inputYearValue === '2018' && selectedSub === 'Physics') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1fcVv30_SNTX9jErgUyg_GKzDLRCoM--P/view?usp=share_link");
  }
  else if (inputYearValue === '2018' && selectedSub === 'Biology') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1FLeu7aMORwHn0h183iNcKzHgltkiwxTd/view?usp=share_link");
  }
  else if (inputYearValue === '2018' && selectedSub === 'Social') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1e1dV2dtyNFeThIvea_Nra7PzTI3d78jF/view?usp=share_link");
  }
  else if (inputYearValue === '2019' && selectedSub === 'Telugu') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/11FcKMzKZoKQP8Q6SqTol27swtGDoKLKK/view?usp=share_link");
  }
  else if (inputYearValue === '2019' && selectedSub === 'Hindi') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1ZPlbOKmuxwSQjKwaTT4xE7gAlFA7uU89/view?usp=share_link");
  }
  else if (inputYearValue === '2019' && selectedSub === 'English') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1CPBLIGJrnu8WXTUbODceZf6-KgQzleZX/view?usp=share_link");
  }
  else if (inputYearValue === '2019' && selectedSub === 'Maths') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1sdKP1eBXOvHg4CDUgJrUlkt817PthBkZ/view?usp=share_link");
  }
  else if (inputYearValue === '2019' && selectedSub === 'Physics') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1966wKbI7mxPYH-BFX_F5x-h74vIzJLMQ/view?usp=share_link");
  }
  else if (inputYearValue === '2019' && selectedSub === 'Biology') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1fInigREGN3lLpoMcr3rMPiYwPxQR3jwd/view?usp=share_link");
  }
  else if (inputYearValue === '2019' && selectedSub === 'Social') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1KU30QhwsTMFgg6VYbFrYhFDeQ7YCtUai/view?usp=share_link");
  }
  else if (inputYearValue === '2021' && selectedSub === 'Telugu') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1AR4V0ZX9D7nMrWqjiVFt8jwHozUs65_k/view?usp=share_link");
  }
  else if (inputYearValue === '2021' && selectedSub === 'Hindi') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1AXGk-omZV3EqBaLKTdUaQV4rZPQM_2Uf/view?usp=share_link");
  }
  else if (inputYearValue === '2021' && selectedSub === 'English') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1A_KQo7QS516av8m6NG5Mm8gIpjp-sN0r/view?usp=share_link");
  }
  else if (inputYearValue === '2021' && selectedSub === 'Maths') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1Agg_0eZ5ipeh_HSk3QJ1fZpfyPx4Q56V/view?usp=share_link");
  }
  else if (inputYearValue === '2021' && selectedSub === 'Physics') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1B-GevLYHfRiCUIxfKK6sPtJIvPphIt0c/view?usp=share_link");
  }
  else if (inputYearValue === '2021' && selectedSub === 'Biology') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1B68luweGjR3s_xZV7lKl3yPH8AH9qNHB/view?usp=share_link");
  }
  else if (inputYearValue === '2021' && selectedSub === 'Social') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1BFU5SNv_vr0VhM9z9RELTgTKcl8A85Al/view?usp=share_link");
  }
  else if (inputYearValue === '2022' && selectedSub === 'Telugu') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1AOnrYtn0U0XtlZa2Fd4fkGJ56EUkDjEg/view?usp=share_link");
  }
  else if (inputYearValue === '2022' && selectedSub === 'Hindi') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1AT8ijb8vjXFDowet1eBzmbujerKS8hWr/view?usp=share_link");
  }
  else if (inputYearValue === '2022' && selectedSub === 'English') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1AYahjHwPvVLbwEiGOsqqd-_YBbK9CWZ4/view?usp=share_link");
  }
  else if (inputYearValue === '2022' && selectedSub === 'Maths') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1AdWa8skQhvQoeDPclQotp_na82hRrbFj/view?usp=share_link");
  }
  else if (inputYearValue === '2022' && selectedSub === 'Physics') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1B-4_ZSyekKrgBMQPpT6kAX2ExIqKrEzR/view?usp=share_link");
  }
  else if (inputYearValue === '2022' && selectedSub === 'Biology') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1B25_eO0JPz0lajRphp1gNR6h2u5nWMTc/view?usp=share_link");
  }
  else if (inputYearValue === '2022' && selectedSub === 'Social') {
    document.getElementById("submitButton").setAttribute("href", "https://drive.google.com/file/d/1BBoU9dT_2b5hHDmHVv1WjVezTf1STYAx/view?usp=share_link");
  }
}

submitButton.onclick = function () {
  submit();
}

