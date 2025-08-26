import Header from '@/components/Header/Header';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
const Seafood = require('../../assets/Images/SeaFood.jpg');
const Dessert = require('../../assets/Images/Dessert.jpg');
const Breakfast = require('../../assets/Images/Breakfast.jpg');
const Vegetarian = require('../../assets/Images/Vegetarian.jpg');
const Recipes_Logo = require('../../assets/Images/Recipes_Logo.jpg');


const Recipes = () => {

    const [recipes, setRecipes] = useState<[]>([])
    const [recipe,setRecipe] = useState<string>('')
    const [category, setCategory] = useState<[]>([])
    const [searchError, setSearchError] = useState<string>("")

    // FUNCTION TO FETCH EXERCISE DATA BASED ON CATEGORY
    const fetchRecipes = async (recipe: string) => {
        if(recipe === "") {
            setSearchError("Kindly enter a search item")
        } else {
            setCategory([])
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`)
            .then(response => response.json())
            .then((data) => {
                setSearchError("")
                setRecipes(data.meals)
            })
            .catch(err => console.error(err));
        }
    };

    // FUNCTION TO FETCH EXERCISE DATA BASED ON CATEGORY
    const fetchCategory = async (recipeCategory: string) => {
        setRecipes([])
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${recipeCategory}`)
        .then(response => response.json())
        .then((data) => {
            setCategory(data.meals)
        })
        .catch(err => console.error(err));
    };

return (
    <ScrollView>
        <Header />
        <View style={{ alignItems: 'center', marginTop: 20}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 20 }}>
                <Image source={Recipes_Logo} style={{ height: 40, width: 40}} />
                <Text   style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 32, marginTop: 5 }}>Search Your Desired Dish</Text>
            </View>
            <View>
                <TextInput 
                    value={recipe}
                    onChangeText={(value: string) => setRecipe(value)}
                    placeholder="e.g. Chicken Curry"
                    style={{ borderBottomWidth: 1, borderColor: 'black', padding: 1, width: 310, fontFamily: 'InstrumentSerif', fontSize: 22, outline: 'none', textAlign: 'center' }}
                />
            </View>
            <Pressable onPress={() => fetchRecipes(recipe)} style={{ alignItems: 'center', backgroundColor: 'midnightblue', marginBottom: 10, marginTop: 15, paddingVertical: 5, borderRadius: 5, width: 150  }}>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, color: 'white' }}>Submit</Text>
            </Pressable>
            <View style ={{ flexDirection: 'row', columnGap: 20, marginBottom: 10, marginTop: 20 }}>
                <Pressable onPress={() => fetchCategory('Breakfast')}>
                    <Image source={Breakfast} style={{ borderRadius: '50%', height: 70, width:70 }} />
                    <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Breakfast</Text>
                </Pressable>
                <Pressable onPress={() => fetchCategory('Seafood')}>
                    <Image source={Seafood} style={{ borderRadius: '50%', height: 70, width:70 }} />
                    <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Seafood</Text>
                </Pressable>
                <Pressable onPress={() => fetchCategory('Vegetarian')}>
                    <Image source={Vegetarian} style={{ borderRadius: '50%', height: 70, width:70 }} />
                    <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Vegetarian</Text>
                </Pressable>
                <Pressable onPress={() => fetchCategory('Dessert')}>
                    <Image source={Dessert} style={{ borderRadius: '50%', height: 70, width:70 }} />
                    <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Dessert</Text>
                </Pressable>
            </View>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {
        recipes.length > 0 ? recipes.map((recipe: any, index: number) => (
            <Link href={`/Details/${recipe.idMeal}`} key={index}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 10, padding: 10, borderBottomWidth: 1, borderColor: '#494949ff', borderRadius: 5, width: 350 }}>
                    <Image source={recipe.strMealThumb} style={{ borderRadius: 5, width: 300, height: 300 }} />
                    <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 24, marginTop: 5, textAlign: 'center' }}>{recipe.strMeal}</Text>
                </View>
            </Link>
        )) : <Text style={{ textAlign: 'center', fontFamily: 'InstrumentSerif', fontSize: 18, color: 'red' }}>{searchError}</Text>
        }
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {
        category.length > 0 ? category.map((recipe: any, index: number) => (
            <Link href={`/Details/${recipe.idMeal}`} key={index}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 10, padding: 10, borderBottomWidth: 1, borderColor: '#494949ff', borderRadius: 5, width: 350 }}>
                    <Image source={recipe.strMealThumb} style={{ borderRadius: 5, width: 300, height: 300 }} />
                    <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 24, marginTop: 5, textAlign: 'center' }}>{recipe.strMeal}</Text>
                </View>
            </Link>
        )) : <Text style={{ textAlign: 'center', fontFamily: 'InstrumentSerif', fontSize: 18, color: 'red' }}>{searchError}</Text>
        }
        </View>
    </ScrollView>
)
}

export default Recipes