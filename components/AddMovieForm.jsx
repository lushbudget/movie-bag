import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, View } from 'react-native';

const AddMovieForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      genre: data.genre.split(',').map(item => item.trim()), 
      writer: data.writer.split(',').map(item => item.trim()),// Convert genre string to array
      actors: data.actors.split(',').map(item => item.trim()) // Convert actors string to array
    };
    console.log(`FORMATTED DATA`,formattedData)

    try {
      const response = await fetch('http://localhost:3000/api/movie', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });
      const result = await response.json();
      console.log('Movie added successfully:', result);
      alert("Movie added successfully!");
    } catch (error) {
      console.error("Error adding movie: ", error);
      alert("Failed to add movie. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
    <form style={styles.form}onSubmit={handleSubmit(onSubmit)}>
      <input style={styles.plotInput}{...register("title", { required: true })} placeholder="Title" />
      <input style={styles.plotInput}{...register("releaseYear", { required: true, valueAsNumber: true })} placeholder="Release Year" type="number" />
      <input style={styles.plotInput}{...register("genre", { required: true })} placeholder="Genre (comma separated)" />
      <input style={styles.plotInput}{...register("director", { required: true })} placeholder="Director" />
      <input style={styles.plotInput}{...register("writer", { required: true })} placeholder="Writer" />
      <input style={styles.plotInput}{...register("actors", { required: true })} placeholder="Actors (comma separated)" />
      <input style={styles.plotInput}{...register("plot", { required: true })} placeholder="Plot" />
      <input style={styles.plotInput}{...register("rating", { required: true })} placeholder="Rating" />
      <input style={styles.plotInput}{...register("musicBy", { required: true })} placeholder="Music By" />
      <input style={styles.plotInput}{...register("runTimeMins", { required: true, valueAsNumber: true })} placeholder="Run Time (mins)" type="number" />
      <input type="submit" />
    </form>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 20,
   

  },

  form: {
    flex: 1,
    padding: 20,
    

  },
  plotInput: {
    height: 100,
    width: 400,
    marginVertical: 20,
    borderColor: 'gray',
    borderWidth: 3,
    paddingHorizontal: 10,
    textAlignVertical: 'top', // Vertical alignment for multiline input
    textAlign: 'top', // Horizontal alignment
  }
})

export default AddMovieForm;
