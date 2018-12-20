

function izracunaj() {
    dob = document.getElementById("rodjendan").value;
    year = Number(dob.substr(4, 4));
    month = Number(dob.substr(2, 2))-1;
    day = Number(dob.substr(0, 2));
    today = new Date();
    age = today.getFullYear() - year;
    document.getElementById("brGodina").value = age;
    
    rodjDatum = new Date(year, month, day);
     
    ms = (1000 * 60 * 60 * 24);
    todayMS = today.getTime();
    rodjDatumMS = rodjDatum.getTime();
   
   
    n = (todayMS - rodjDatumMS) / ms;
    brDana = document.getElementById("dana");
    brDana.value = n.toFixed(0);

    
    brSati = document.getElementById("sati");
    brSati.value = brDana.value * 24;

    brMinuta = document.getElementById("minuta");
    brMinuta.value = brSati.value * 60;

    brNedelja = document.getElementById("nedelja");
    brNedelja.value = Math.abs(Math.round(brDana.value / 7));
    
    
    function monthDiff(a,b) {
        
        months = (b.getFullYear() - a.getFullYear()) * 12;
        
        months += b.getMonth() - a.getMonth();
        
        
        if (b.getDate() < a.getDate())
        {
            months--;
        } 
        return Math.abs(Math.round(months))
    }
    

 brMeseci = document.getElementById("meseci");
 brMeseci.value = monthDiff(today, rodjDatum)
}

document.getElementById("dugme").addEventListener("click", izracunaj);

 