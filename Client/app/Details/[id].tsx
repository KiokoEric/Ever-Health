import Header from '@/components/Header/Header';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Linking, Pressable, ScrollView, Text, View } from 'react-native';

const Details = () => {

    const { id } = useLocalSearchParams()

    // USESTATE

    const [items, setItems] = useState<[]>([])
    const [videoLink, setVideoLink] = useState<string>("")

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)  
        .then(response => response.json())
        .then((data) => {
            const videoUrl = data.meals[0].strYoutube
            setItems(data.meals)
            setVideoLink(videoUrl)
        })
        .catch(err => console.error(err));

    }, [])



return (
    <ScrollView>
        <Header />
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center',}}>
        {
        items.map((item: any, index: number) => (
            <View key={index} style={{ flexDirection: 'column', alignItems: 'center', marginTop: 10,  justifyContent: 'center', width: 380 }}>
                <Pressable onPress={()=>{Linking.openURL(videoLink) }}>
                    <Image source={item.strMealThumb} style={{ borderRadius: 5, height: 300, marginBottom: 20, width: 300}} />
                </Pressable>
                <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 24, marginTop: 5, textDecorationLine: 'underline' }}>{item.strMeal}</Text>
                <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 24, marginTop: 15, textDecorationLine: 'underline' }}>Ingredients</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', columnGap: 50, marginTop: 10, width: 300 }}>
                    <FlatList
                        data={items}
                        renderItem={({item:string}) => {
                        return (
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient1}</Text>
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient2}</Text>   
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient3}</Text>   
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient4}</Text>   
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient5}</Text>         
                            </View>
                            )
                        }}
                    />
                    <FlatList
                        data={items}
                        renderItem={({item:string}) => {
                        return (
                            <View style={{ flexDirection: 'column' }}>  
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient6}</Text>   
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient7}</Text>   
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient8}</Text>   
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient9}</Text>  
                                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textTransform: 'capitalize', fontStyle: 'italic' }}>{item.strIngredient10}</Text>           
                            </View>
                            )
                        }}
                    />
                </View>
                <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 24, marginTop: 15, textDecorationLine: 'underline' }}>Instructions</Text>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 20, marginBottom: 20, textAlign: 'center', paddingHorizontal: 10 }}>{item.strInstructions}</Text>
            </View>
        ))
        }
        </View>
    </ScrollView>
)
}

export default Details