/**
 * The probelem Statement is to make a firefly which will rome around
 * in a box of 30 by 50 without going out of the box. * 
 * */


let box = [];
let height = 10;
let width = 20;
for(let i =0;i<=height ;i++){
    let row =[];
    for  (let j=0;j <= width;j++) {
        if ((i == 0 || i == height)){
            if(j==0 ||j==(width)) {
                row.push("+");
            } else{
                row.push('-');
            }
        }else if(j==0 || j==width){
            row.push("|");
        }
        else{
            row.push(" ");
        }
    }
    box.push(row);
}

//Function to print the box and the pattern
function printBox(box){
    for(let i=0;i<=height;i++){
        console.log(box[i].join(""));
    }
}


// Selecting location for star, using random function
let x = Math.floor(Math.random()*width - 1);
let y = Math.floor(Math.random()*(height - 1)); 

//printing star at random position
if(box[x][y]==' '){
    box[x][y]='*';
}
printBox(box)

/**
 * Function to mark star at point  x, y in the box array,
 * and to change its position when required
*/
function markStar(){
    let dx = [-1,0,1];
    let dy = [-1,0,1];

    let newx = x + dx[Math.floor(Math.random()*3)];
    let newy = y + dy[Math.floor(Math.random()*3)];

    // Checking whether the new location is valid or not
    if(newx == width ){
        newx--;
    }
    if(newx == 0){
        newx++;
    }
    if(newy == width ){
        newy--;
    }
    if(newy == 0){
        newy++;
    }

    if(box[newx][newy] ==' '){
        box[x][y] = " ";
        box[newx][newy]="*";
        x = newx;
        y = newy;
        printBox(box);
    }
}

/**
 * 
 * calling firefly in loop
*/

setInterval(()=>{
    markStar()
},300);


