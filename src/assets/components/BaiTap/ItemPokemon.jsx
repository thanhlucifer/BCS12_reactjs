import React from 'react'

const ItemPokemon = ({ pokemon }) => {
    return (
        <div className="p-3">
            <img src={
                pokemon
                    ? pokemon.image
                    : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
            } alt="" />
            {/* Neu pokemon co san thi hien thi */}
            {pokemon && (
                <>
                    <h3>{pokemon?.name}</h3>
                    <p>Tan cong: {pokemon?.attack}</p>
                    <p>Phong thu: {pokemon?.defense}</p>
                    <button>Xem chi tiet</button>
                </>
            )}

        </div>
    )
}

export default ItemPokemon