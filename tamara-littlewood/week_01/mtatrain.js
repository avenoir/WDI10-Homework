// MTA train excersice

var lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
var line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];



//var count = 0;

var mta = function ( stopOn, lineOn, stopOff, lineOff ) {
    var count = -1;
    
    if ( lineOn === lineOff ) {
        for ( var i = lineOn.indexOf( stopOn ); i <= lineOff.indexOf( stopOff ); i++ ) {
            count += 1;
            console.log( lineOn[i] + ' ' + lineOn + ' ' + count );
        }
    }
    
    if ( lineOn !== lineOff ) { 

        for ( var j = lineOn.indexOf( stopOn ); j <= lineOn.indexOf( 'Union Square' ); j++ ) {
            count += 1;
            console.log( lineOn[j] + ' ' + lineOn + ' j ' + count ); 
        }
            if ( lineOff.indexOf( 'Union Square' ) < lineOff.indexOf( stopOff ) ) { 
                for ( var k = lineOff.indexOf( 'Union Square' ); k <= lineOff.indexOf( stopOff ); k++ ) {
                    count += 1;
                    console.log( lineOff[k] + ' ' + lineOff + ' k ' + count );
            }
            if ( lineOff.indexOf( 'Union Square' ) > lineOff.indexOf( stopOff ) ) {
                for ( var m = lineOff.indexOf( 'Union Square' ); m >= lineOff.indexOf( stopOff ); m-- ) {
                    count += 1;
                    console.log( lineOff[m] + ' ' + lineOff + ' m ' + count );
            }
        }
    }
        
}
    
}
//mta ( '8th', lineL, '1st', lineL );
//mta ( '8th', lineL, 'Astor Place', line6 );
mta ( '8th', lineL, 'Grand Central', line6 );
//mta ( '8th', lineL, 'Astor Place', line6 );
//line6.indexOf( 'Grand Central' ); // 0
//line6.indexOf( 'Union Square' ); // 4