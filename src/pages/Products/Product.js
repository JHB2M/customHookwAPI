import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList ,ActivityIndicator} from "react-native";


import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import ProductCard from "../../components/ProductCard/ProductCard";
import useFetch from "../../components/hooks/useFetch/useFetch"

const url ="https://fakestoreapi.com/products"

export default function Product({ navigation }) {
 
  const {error,loading,list } =useFetch(url)

  const handleProductSelect  =item  =>{
    navigation.navigate('DetailScreen',{item})
  }
// Details sayfasına geçerken hangi ürünün detaylarını görmek istedigimiz icin fonksiyonla beraber birde id parametresini gönderdik

  const renderProduct =({item} ) => <ProductCard  product ={item} onSelect = {() => handleProductSelect(item)}/>

 

if (error){
   return <Error/>
}
if(loading)  return <Loading />




  return (
    <View>
      <FlatList 
        data ={list}
        renderItem ={renderProduct}
      />
    </View>
  );
}
