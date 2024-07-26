import React , { useState } from 'react'
import ItemPokemon from './ItemPokemon';
import { DatePicker } from 'antd';
import { useSelector } from 'react-redux';
import useInput from '../../../hooks/useInput';

const BaiTap1Props = () => {
    const { pokemon } = useSelector((state) => state.pokemonSlide);
    console.log(pokemon)
    const taikhoan = useInput('');
    console.log(taikhoan)
    const pokemons = [
        {
            name: "Pikachu",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
            type: "Electric",
            damage: 55,
            defense: 40,
            attack: 90
        },
        {
            name: "Charizard",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
            type: "Fire/Flying",
            damage: 84,
            defense: 78,
            attack: 100
        },
        {
            name: "Bulbasaur",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
            type: "Grass/Poison",
            damage: 49,
            defense: 49,
            attack: 65
        },
        {
            name: "Squirtle",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
            type: "Water",
            damage: 48,
            defense: 65,
            attack: 50
        },
        {
            name: "Jigglypuff",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
            type: "Normal/Fairy",
            damage: 45,
            defense: 20,
            attack: 45
        },
        {
            name: "Meowth",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
            type: "Normal",
            damage: 45,
            defense: 35,
            attack: 90
        },
        {
            name: "Gengar",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
            type: "Ghost/Poison",
            damage: 65,
            defense: 60,
            attack: 110
        },
        {
            name: "Eevee",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
            type: "Normal",
            damage: 55,
            defense: 50,
            attack: 55
        },
        {
            name: "Snorlax",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
            type: "Normal",
            damage: 110,
            defense: 65,
            attack: 30
        },
        {
            name: "Dragonite",
            image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
            type: "Dragon/Flying",
            damage: 134,
            defense: 95,
            attack: 80
        }
    ];
    return (
        <div>
          
            <h2 className='text-center font-bold text-3xl'>POKEMON</h2>
            <div className='grid grid-cols-5'>
                {pokemons.map((item, index) => {
                    const {image, name, type, attack, defense, damage} = item
                    return <ItemPokemon pokemon={item}></ItemPokemon>
                    
                })}
            </div>
            <input type="text" placeholder='Vui long nhap tai khoan' {...taikhoan}/>
        </div>
    )
}

export default BaiTap1Props