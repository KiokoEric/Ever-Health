import Header from '@/components/Header/Header';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Linking, Pressable, ScrollView, Text, View } from 'react-native';

const Instructions = () => {

    const { id } = useLocalSearchParams()

    // USESTATE  

    const [videos,setVideos] = useState([])
    const [instructions,setInstructions]=useState<any>('')

    // FUNCTION TO FETCH EXERCISE DATA BASED ON EXERCISE ID

    useEffect(() => {

        const fetchExerciseData = async () => {
        const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;
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
            setInstructions(result)
        } catch (error) {
            console.error(error);
        } 
    };
        fetchExerciseData()
    },[])

    let youTubeLink = instructions.name

    // CALLING ON YOUTUBE VIDEOS BASED ON EXERCISE NAME

    useEffect(() => {

        const YouTube = async () => { 

            const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${youTubeLink}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
                }
            };
    
            try {
                fetch(url, options)
                .then (response => response.json()) 
                .then((data) => {
                    setVideos(data.contents)
                })
            } catch (error) {
                console.error(error);
            }
        }

        if(instructions) {
            YouTube()
        }
        
    }, [instructions])

    const handlePress=(id: string) => {
        Linking.openURL(`https://www.youtube.com/watch?v=${id}`)
    }

return (
    <ScrollView>
        <Header />
        <View>
            <View style={{ borderBottomWidth: 1, borderColor: '#494949ff', borderRadius: 5, margin: 10, padding: 10, alignItems: 'center' }}>
                <Image source={instructions.gifUrl} style={{alignSelf: 'center', height: 300, marginBottom:10, width: 300, }} />
                <Text style={{ fontWeight: 'bold', fontFamily: 'InstrumentSerif', fontSize: 24, textTransform: 'capitalize' }}>{instructions.name}</Text>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 20, fontWeight: 'bold', marginTop: 5, textTransform: 'capitalize' }}>Equipment: {instructions.equipment}</Text>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 20, fontWeight: 'bold', marginTop: 5, marginBottom: 10, textTransform: 'capitalize' }}>Target Muscle: {instructions.target}</Text>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 18, marginTop: 5, textAlign: 'center' }}>{instructions.instructions}</Text>
            </View>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 28, fontWeight: 'bold', marginBottom: 10, textDecorationLine: 'underline' }}>YouTube Videos</Text>
                {
                    videos.map((video: any, index: number) => (
                        
                        <Pressable onPress={()=>handlePress(video.video.videoId)} key={index} style={{ alignItems: 'center', marginBottom: 20 }}>
                            <Image source={{ uri: video.video.thumbnails[0].url }} style={{ width: 300, height: 200 }} />
                            <Text style={{ fontFamily: 'InstrumentSerif', fontSize: 20, fontWeight: 'bold', marginTop: 5, textAlign: 'center' }}>{video.video.title}</Text>
                        </Pressable>
                    ))
                }
            </View> 
        </View>
    </ScrollView>
)
}

export default Instructions
