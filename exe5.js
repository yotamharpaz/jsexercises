/*Write a functions that plays city trivia:
function guessCity(capital, coastal, famous, ancient) {
    // your code goes here
}
The arguments are all true or false. The return value is the name of the city.
Jerusalem is ancient, famous and a capital
Tel Aviv is famous and coastal
Acre is coastal and ancient
Katzrin is ancient
Zikim is coastal
Musmus is not any of the above
For example, guessCity(false, true, true, false) returns "Tel Aviv".
No other cities are recognized.

As usual, upload your code to your JS GitHub repo.
(No offense was meant towards any city - please don't take personally)*/
function guessCity(capital, coastal, famous, ancient) {
 
    if(capital&&!coastal&&famous&&ancient)return "jerusalem"
        else if(!capital&&coastal&&famous&&!ancient)return "tel Aviv"
        else if(!capital&&coastal&&!famous&&ancient)return "acre"
        else if(!capital&&!coastal&&!famous&&ancient)return "katzrin"
        else if(!capital&&coastal&&!famous&&!ancient)return "zikim"
        else if(!capital&&!coastal&&!famous&&!ancient)return "musmus"
      
  }
  console.log(guessCity(false, true, true, false));
