var members = [
    "https://jerrymahoney.files.wordpress.com/2013/06/familybook.png", 
    "https://whjr-v2-prod-bucket.s3.ap-south-1.amazonaws.com/1fed80b4-2660-4cba-8db2-f13cd8bd4ad3.jpg", 
    
    
    ];

    var names = [
    "My Family-Book", 
    "Adarsh", 
    "SambhuNaraynSahoo", 
    "Sanjukta Sahoo", 
    
    ];

    var count = 0;

    function nextslide () {

    document.getElementById("members").src = members[count];

    document.getElementById("names").innerHTML = names[count];
    
    count++;

    if (count == 4) {
    
    count = 0;

    }

    }