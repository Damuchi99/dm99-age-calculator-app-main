const today = new Date();

document.getElementById('boton-calcular').addEventListener('click', function(){
    let fecha_valida = validarFecha(today);

    if (fecha_valida){
        console.log("Se puede calcular edad");
    }else{
        console.log("Error al calcular edad");
    }
});

function validarFecha(fecha){
    let fecha_correcta = true;

    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value;
    let year = document.getElementById('input-year').value;

    /*console.log(month);
    console.log(typeof(month));
    console.log(typeof(parseInt(month)));
    console.log(typeof(12));
    console.log(parseInt(month) > 12);*/

    let actual_year = fecha.getFullYear();

    let day_title = document.getElementById('day-title');
    let month_title = document.getElementById('month-title');
    let year_title = document.getElementById('year-title');

    let day_input = document.getElementById('input-day');
    let month_input = document.getElementById('input-month');
    let year_input = document.getElementById('input-year');

    let texto_error_day = document.getElementById('texto-error-day');
    let texto_error_month = document.getElementById('texto-error-month');
    let texto_error_year = document.getElementById('texto-error-year');
    
    if(year > actual_year){
        year_title.style.color = "rgb(255, 87, 87)";
        year_input.style.borderColor = "rgb(255, 87, 87)";
        texto_error_year.innerHTML = "Must be in the past";
        fecha_correcta = false;
    }

    if(month < 1 || month > 12){
        month_title.style.color = "rgb(255, 87, 87)";
        month_input.style.borderColor = "rgb(255, 87, 87)";
        texto_error_month.innerHTML = "Must be a valid month";
        fecha_correcta = false;
    }

    if(day < 1 || day > 31){
        day_title.style.color = "rgb(255, 87, 87)";
        day_input.style.borderColor = "rgb(255, 87, 87)";
        texto_error_day.innerHTML = "Must be a valid day";
        fecha_correcta = false;
    }/*else{
        day_title.style.color = "rgb(255, 87, 87)";
        day_input.style.borderColor = "rgb(255, 87, 87)";
        texto_error_day.innerHTML = "";
    }*/

    console.log(day_title.style.color.value);
    console.log((day_title.style.color == "rgb(113, 111, 111)"));
    console.log(texto_error_day.innerHTML == "");

    if(inputsValidos(texto_error_day, texto_error_month, texto_error_year) && !fechaCorrecta(day, month, year)){
        year_title.style.color = "rgb(255, 87, 87)";
        year_input.style.borderColor = "rgb(255, 87, 87)";
        month_title.style.color = "rgb(255, 87, 87)";
        month_input.style.borderColor = "rgb(255, 87, 87)";
        day_title.style.color = "rgb(255, 87, 87)";
        day_input.style.borderColor = "rgb(255, 87, 87)";
        texto_error_day.innerHTML = "Must be a valid date";

        fecha_correcta = false;
    }

    return fecha_correcta;
}

function inputsValidos(texto_error_dia, texto_error_mes, texto_error_anio){
    return texto_error_dia.innerHTML == "" &&
           texto_error_mes.innerHTML == "" &&
           texto_error_anio.innerHTML == "";
}

function fechaCorrecta(dia,mes,anio){
    let meses_con_30_dias = [4,6,9,11];

    return (mes==2 && (dia<29 || (dia==29 && anio%4==0))) || 
           (meses_con_30_dias.includes(mes) && dia!=31) ||
           (!meses_con_30_dias.includes(mes));
}

























/*if(year > actual_year){
    cambiarEstiloFormularioError(year_title, year_input);
    texto_error_year.innerHTML = "Must be in the past";
}else{
    cambiarEstiloFormularioNormal(year_title, year_input);
    texto_error_day.innerHTML = "";
}

if(month < 1 || month > 12){
    cambiarEstiloFormularioError(month_title, month_input);
    texto_error_month.innerHTML = "Must be a valid month";
}else{
    cambiarEstiloFormularioNormal(month_title, month_input);
    texto_error_day.innerHTML = "";
}

if(day < 1 || day > 31){
    cambiarEstiloFormularioError(day_title, day_input);
    texto_error_day.innerHTML = "Must be a valid day";
}else{
    cambiarEstiloFormularioNormal(day_title, day_input);
    texto_error_day.innerHTML = "";
}

if(datosValidos(day_title, month_title, year_title) && !fechaCorrecta(day,month,year)){
    cambiarEstiloFormularioError(year_title, year_input);
    cambiarEstiloFormularioError(month_title, month_input);
    cambiarEstiloFormularioError(day_title, day_input);
    texto_error_day.innerHTML = "Must be a valid date";
    fecha_correcta = false;
}else{
    cambiarEstiloFormularioNormal(year_title, year_input)
    cambiarEstiloFormularioNormal(month_title, month_input);
    cambiarEstiloFormularioNormal(day_title, day_input);
    texto_error_day.innerHTML = "";
}

return fecha_correcta;
}

function cambiarEstiloFormularioError(label, input){
label.style.color = "rgb(255, 87, 87)";
input.style.borderColor = "rgb(255, 87, 87)";
}

function cambiarEstiloFormularioNormal(label, input){
label.style.color = "black";
input.style.borderColor = "black";
}*/