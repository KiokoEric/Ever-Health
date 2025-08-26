import Header from '@/components/Header/Header';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
const Exercise_Logo = require('../../assets/Images/Exercise_Logo.webp');

const Exercise = () => {

    // USESTATE

    const [exercises, setExercises] = useState<[]>([])
    const [category, setCategory] = useState<string>('')
    const [searchError, setSearchError] = useState<string>("")

    const Categorydata = [
        { value:"Back", key:"back" },
        { value:"Cardio", key:"cardio" },
        { value:"Chest", key:"chest" },
        { value:"Lower Arms", key:"lower arms"},
        { value:"Lower Legs", key:"lower legs"},
        { value:"Neck", key:"neck"},
        { value:"Shoulders", key:"shoulders"},
        { value:"Upper Arms", key:"upper arms"},
        { value:"Upper Legs", key:"upper legs"},
        { value:"Waist", key:"waist"},
    ]

    // FUNCTION TO FETCH EXERCISE DATA BASED ON CATEGORY
    const fetchExerciseData = async (category: string) => {
        if (category === "") {
            setSearchError("Kindly select a body part")
        } else {
        setSearchError("")
        const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${category}?limit=60`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        }
        try {
            const response = await fetch(url, options);
            const result = await response.json()
            setExercises(result)
        } catch (error) {
            console.error(error);
        } 
    }
    };

return (
    <ScrollView>
        <Header />
        <View style={{ alignItems: 'center', marginTop: 10 }}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Image source={Exercise_Logo} style={{ width: 30, height: 30 }} />
                <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 32, marginTop: 5, textTransform: 'capitalize' }}>Search your body part</Text>
            </View>
            <SelectList 
                value={category}
                setSelected={(value: string) => { setCategory(value) }} 
                data={Categorydata} 
                save="key"
                boxStyles= {{ borderBottomColor: 'black', marginBottom:10, width: 350}}
                inputStyles={{ fontFamily: 'InstrumentSerif', fontSize: 18, outline: 'none' }}
                dropdownTextStyles={{ fontFamily: 'InstrumentSerif', fontSize: 22,  textTransform:'capitalize', outline: 'none', paddingHorizontal: 5, paddingVertical: 2 }}
            />
            <Text style={{ textAlign: 'center', fontFamily: 'InstrumentSerif', fontSize: 18, color: 'red' }}>{searchError}</Text>
            <Pressable onPress={() => fetchExerciseData(category)} style={{ alignItems: 'center', backgroundColor: 'midnightblue', marginBottom: 10, marginTop: 10, paddingVertical: 5, borderRadius: 5, width: 150  }}>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, color: 'white' }}>Submit</Text>
            </Pressable>
            <View>
            {
            exercises.map((exercise: any, index: number) => (
                <Link href={`/Instructions/${exercise.id}`} key={index}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 10, padding: 10, borderBottomWidth: 1, borderColor: '#494949ff', borderRadius: 5, width: 350 }}>
                        <Image source={exercise.gifUrl} style={{ width: 300, height: 300 }} />
                        <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 20, textTransform: 'capitalize' }}>{exercise.name}</Text>
                    </View>
                </Link>
            ))
            }
            </View>
        </View>
    </ScrollView>
)
}

export default Exercise
