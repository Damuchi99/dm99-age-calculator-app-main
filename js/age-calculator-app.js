const today = new Date();

let actual_year = today.getFullYear();
let actual_month = today.getMonth()+1;
let actual_day = today.getDate();

let day_title = document.getElementById('day-title');
let month_title = document.getElementById('month-title');
let year_title = document.getElementById('year-title');

let day_input = document.getElementById('input-day');
let month_input = document.getElementById('input-month');
let year_input = document.getElementById('input-year');

let texto_error_day = document.getElementById('texto-error-day');
let texto_error_month = document.getElementById('texto-error-month');
let texto_error_year = document.getElementById('texto-error-year');

let fecha_correcta = true;
let inputs_validos = true;
let meses_con_30_dias = [4,6,9,11];

let dd, mm, yyyy;

document.getElementById('boton-calcular').addEventListener('click', function(){
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value;
    let year = document.getElementById('input-year').value;

    if(year == "" || year > actual_year){
        fecha_correcta = false;
        inputs_validos = false;
        year_title.style.color = "rgb(255, 87, 87)";
        year_input.style.borderColor = "rgb(255, 87, 87)";
        if(year == ""){
            texto_error_year.innerHTML = "This field is required";
        }else{
            texto_error_year.innerHTML = "Must be in the past";
        }
    }else{
        year_title.style.color = "rgb(113, 111, 111)";
        year_input.style.borderColor = "rgb(113, 111, 111)";
        texto_error_year.innerHTML = "";
    }

    if(month == "" || month < 1 || month > 12){
        fecha_correcta = false;
        inputs_validos = false;
        month_title.style.color = "rgb(255, 87, 87)";
        month_input.style.borderColor = "rgb(255, 87, 87)";
        if(month == ""){
            texto_error_month.innerHTML = "This field is required";
        }else{
            texto_error_month.innerHTML = "Must be a valid month";
        }
    }else{
        month_title.style.color = "rgb(113, 111, 111)";
        month_input.style.borderColor = "rgb(113, 111, 111)";
        texto_error_month.innerHTML = "";
    }

    if(day == "" || day < 1 || day > 31){
        fecha_correcta = false;
        inputs_validos = false;
        day_title.style.color = "rgb(255, 87, 87)";
        day_input.style.borderColor = "rgb(255, 87, 87)";
        if(day == ""){
            texto_error_day.innerHTML = "This field is required";
        }else{
            texto_error_day.innerHTML = "Must be a valid day";
        }
    }else{
        day_title.style.color = "rgb(113, 111, 111)";
        day_input.style.borderColor = "rgb(113, 111, 111)";
        texto_error_day.innerHTML = "";
    }

    if(inputs_validos){
        if((month==2 && (day>29 || (day==29 && year%4!=0))) || (meses_con_30_dias.includes(parseInt(month)) && day==31)){
            fecha_correcta = false;
            day_title.style.color = "rgb(255, 87, 87)";
            day_input.style.borderColor = "rgb(255, 87, 87)";
            month_title.style.color = "rgb(255, 87, 87)";
            month_input.style.borderColor = "rgb(255, 87, 87)";
            year_title.style.color = "rgb(255, 87, 87)";
            year_input.style.borderColor = "rgb(255, 87, 87)";
            texto_error_day.innerHTML = "Must be a valid date";
        }else if(year == actual_year){
            if(month > actual_month){
                fecha_correcta = false;
                month_title.style.color = "rgb(255, 87, 87)";
                month_input.style.borderColor = "rgb(255, 87, 87)";
                texto_error_month.innerHTML = "Must be in the past";
            }else if (month == actual_month && day > actual_day){
                fecha_correcta = false;
                day_title.style.color = "rgb(255, 87, 87)";
                day_input.style.borderColor = "rgb(255, 87, 87)";
                texto_error_day.innerHTML = "Must be in the past";
            }
        }
    }

    if(fecha_correcta){
        yyyy = actual_year - year;

        if(actual_month >= month){
            mm = actual_month - month;
        }else{
            yyyy--;
            mm = 12 + actual_month - month;
        }

        if(actual_day >= day){
            dd = actual_day - day;
        }else{
            mm--;
            dd = getDaysInMonth(year, month) + actual_day - day;
        }

        document.getElementById('years').innerHTML = yyyy;
        document.getElementById('months').innerHTML = mm;
        document.getElementById('days').innerHTML = dd;
    }

    fecha_correcta = true;
    inputs_validos = true;
});

function getDaysInMonth(anio, mes){
    return new Date(anio, mes, 0).getDate();
}