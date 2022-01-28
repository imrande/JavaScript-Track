/**
* https://davidwalsh.name/fixing-coercion
* http://getify.github.io/coercions-grid
* http://jsperf.com/triple-equals-vs-double-equals/5
* http://jscoercion.qfox.nl/
* http://webreflection.blogspot.com/2010/10/javascript-coercion-demystified.html

* Explicit coercion \ Implicit coercion
* Use only one form of coercion ( Number vs + operator )

Abstract operations:
    ToString
    ToNumber
    ToBoolean
    ToPrimitive ( when converting objects; uses valueOf > toString )
               
String( [] )                  ''
String( [1,2,3] )             '1,2,3'
String( [null, undefined] )   ','
String( [ [], [], [] ] )      ',,'
String( [,,,,] )              ',,,'        // trailing comma is allowed in array but ignored [ 1, 2, 3, ]


* function signification is a browser implementation-dependent

Number( '' )                 0       
Number( '0' )                0
Number( '-0' )               -0
Number( '009' )              9
Number( '3.14159' )          3.14159
Number( '0.' )               0
Number( '.0' )               0
Number( '.' )                NaN
Number( '0xaf' )             0

Number( true )               1
Number( false )              0
Number( null )               0
Number( undefined )          NaN

Number( obj ) > ToPrimitive > .valueOf > .toString ( if valueOf doesn't return a primitive / value )

Number( [''] )               0        // .toValue returns [''] so fallback to .toString used which returns '', Number('') === 0
Number( ['0'] )              0
Number( ['-0'] )             -0
Number( [null] )             0
Number( [undefined] )        0
Number( [1, 2, 3] )          NaN
Number( [[[[[[]]]]]] )       0

date = new Date

date + 1 = 'string date value1'             // Date uses toString > valueOf fallback

Falsy values
    ''
    0, +0, -0
    false
    null
    undefined
    NaN


Implicit coercion
    "123" - 0               // 123
    "123" - ""              // 123

if ( "" == false )         // empty string converted to 0, false converted to 0

if ( "123" == false )      // 123 == 1 > 0

if ( [] == false )         // '' == 0 > 0 == 0

Never use 
    == true
    == false

[] == ![]
    "" == false
        0 == 0

==   allows coercion, slower
===  disallows coercion, faster

~ hides a leaky abstraction of -1 in .indexOf()

<, >      always uses coercion, no strict form 

String('abc')          instanceof String         // false
(new String('abc'))    instanceof String         // true
String('abc') == (new String('abc')) // true -- WTF

3 > 2 > 1  // false -- WTF => what is happening here is 3 > 2(true) then 2 > 1(true) and 1 > 1 (false)


* parseInt() looking string parameter. If we put non-string we should expect weird 
* behaviour (coercion). if get non-str input then it is 
* first coerce to str then parse into number

* let's pretend 19 is a number base. 0-9a-j, Infinity(I) is in the 19 base
console.log(parseInt(1/0, 19)) // 18 [1/0 == infinity]
console.log(parseInt('08')) // ('08', 10) [under the hood]
console.log(parseInt('07', 20)) // 7
*/
