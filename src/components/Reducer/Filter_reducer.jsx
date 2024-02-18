const filterReducer = (state, action) => {
  if (action.type === "LOAD_FILTER_PRODUCTS") {
    let priceArr = action.payload.map((curElem)=> curElem.price)
    // 1st way
    // console.log(Math.max.apply(null,priceArr))

    // 2nd way
    // let maxPrice = priceArr.reduce((intialVal, curVal) => Math.max(intialVal, curVal),0);
    // console.log(maxPrice);

    // 3rd way 
    let maxPrice = Math.max(...priceArr);

    return {
      ...state,
      filter_products: [...action.payload],
      all_products: [...action.payload],
      filters:{...state.filters, maxPrice, price:maxPrice }

    }
  }
  if (action.type === "SET_GRIDVIEW") {
    return {
      ...state,
      grid_view: true,

    }
  }
  if (action.type === "SET_LISTVIEW") {
    return {
      ...state,
      grid_view: false,
      list_view: true,

    }
  }
  if (action.type === "GET_SORT_VALUE") {
    // let userSortValue = document.getElementById("sort");
    // let sort_value = userSortValue.options[userSortValue.selectedIndex].value; 
    return {
      ...state,
      sorting_value: action.payload,

    }
  }
  if (action.type === "SORTING_PRODUCTS") {
    let newSortData;
    // let tempSortProduct = [...action.payload];
    const { filter_products, sorting_value } = state;
    let tempSortProduct = [...filter_products];

    const sortingProducts = (a, b) => {
      if (sorting_value === "lowest") {
        return a.price - b.price;
      }
      if (sorting_value === "highest") {
        return b.price - a.price;

      }
      if (sorting_value === "a-z") {
        return a.name.localeCompare(b.name);
      }


      if (sorting_value === "z-a") {
        return b.name.localeCompare(a.name);
      }
    }

    newSortData = tempSortProduct.sort(sortingProducts)

    return {
      ...state,
      filter_products: newSortData,
    }
  }
  if(action.type==="UPDATE_FILTERS_VALUE"){
    const {name, value} = action.payload;

    return{
      ...state,
      filters:{
        ...state.filters, 
        [name]: value,
      }
    }
  }
  if(action.type==="FILTER_PRODUCTS"){
    let {all_products} = state;
    let tempFilterProduct = [...all_products];

    const {text, category,company, color, price} = state.filters;
    if(text){
      tempFilterProduct = tempFilterProduct.filter((curElem)=>{
        return curElem.name.toLowerCase().includes(text);
      })
    }
    if(category != "All"){
      tempFilterProduct = tempFilterProduct.filter((curElem)=>{
        return curElem.category === category;
      })
    }
    if(company!="All"){
      tempFilterProduct = tempFilterProduct.filter((curElem)=>{
        return curElem.company.toLowerCase() === company.toLowerCase();  
      })
    }
    if(color!= "All"){
      tempFilterProduct = tempFilterProduct.filter((curElem)=>{
        return curElem.colors.includes(color)
      })
    }
    if(price){
      tempFilterProduct = tempFilterProduct.filter((curElem)=>{
        return curElem.price <= price
      })
    }

    return {
      ...state,
      filter_products: tempFilterProduct, 
    }
  }
  if(action.type==="CLEAR_FILTER"){
    return{
      ...state,
      filters:{
        text:"",
   category: "all",
   company: "all",
   color:"all",
   maxPrice: 0,
   price: 0,
   minPrice: 0,
      }
    }
  }

  return state
}

export default filterReducer;