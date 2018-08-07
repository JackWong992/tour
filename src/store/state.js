let defaultCity = '上海'
try {
  if(localStorage.city){
    deaultCity = localStorage.city
  }
} catch(e){}

export default {
  city: defaultCity
}