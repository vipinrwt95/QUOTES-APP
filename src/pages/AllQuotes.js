
import React,{useEffect} from 'react';
import {getAllQuotes} from '../lib/api';
import QuoteList from '../components/quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import useHttp from '../hooks/use-http';



const AllQuotes=()=>
{
  const {sendRequest,status,data:loadedQuotes,error}=useHttp(getAllQuotes,true);

  useEffect(()=>
  {
   sendRequest(); 
  },[sendRequest]);

if(status==='pending')
{
   return (<div className='centered'><LoadingSpinner /></div>)

}
if(error)
{
   return(
    <p className='centered focused'>{error}</p>
   ) 
}
if(status==='completed'&&(!loadedQuotes||loadedQuotes.length===0))
{
    return <NoQuotesFound />
}
console.log(loadedQuotes);
return(
  <QuoteList quotes={loadedQuotes}/>

)
};
export default AllQuotes;