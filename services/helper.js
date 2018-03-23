export function sumVotes(obj) {
    return Object.keys( obj )
        .reduce( function( sum, key ){
            return sum + parseFloat( obj[key] );
        }, 0 );
}