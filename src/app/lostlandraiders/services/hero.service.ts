import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = [
    { id: 1, name: 'Void Elemental', rarity: 'R', image: '', },
    { id: 2, name: 'Ancient Black Dragon', rarity: 'R', image: '', },
    { id: 3, name: 'Granite Golem', rarity: 'R', image: '', },
    { id: 4, name: 'Fire Elemental', rarity: 'R', image: '', },
    { id: 5, name: 'Earth Elemental', rarity: 'R', image: '', },
    { id: 6, name: 'Storm Elemental', rarity: 'R', image: '', },
    { id: 7, name: 'Demon Ghost', rarity: 'R', image: '', },
    { id: 8, name: 'Wolf Of Terror', rarity: 'R', image: '', },
    { id: 9, name: 'Magic Fire Golem', rarity: 'R', image: '', },
    { id: 10, name: 'Nether Ward', rarity: 'R', image: '', },
    { id: 11, name: 'Guardian Bear', rarity: 'R', image: '', },
    { id: 12, name: 'Thunderhide', rarity: 'R', image: '', },
    { id: 13, name: 'Dire Melee', rarity: 'R', image: '', },
    { id: 14, name: 'Ogre Mauler', rarity: 'R', image: '', },
    { id: 15, name: 'Poison Shaman', rarity: 'R', image: '', },
    { id: 16, name: 'Centaur Khan', rarity: 'R', image: '', },
    { id: 17, name: 'Lightning Bat', rarity: 'R', image: '', },
    { id: 18, name: 'Hell Envoy', rarity: 'R', image: '', },
    { id: 19, name: 'Radiant Range', rarity: 'R', image: '', },
    { id: 20, name: 'Radiant Melee', rarity: 'R', image: '', },
    { id: 21, name: 'Frost Ghost', rarity: 'R', image: '', },
    { id: 22, name: 'Stormbird', rarity: 'R', image: '', },
    { id: 23, name: 'Dire Range', rarity: 'R', image: '', },
    { id: 24, name: 'Kobold Taskmaster', rarity: 'R', image: '', },
    { id: 25, name: 'Frost Ghost', rarity: 'R', image: '', },

    { id: 101, name: 'Infernal', rarity: 'SR', image: '', },
    { id: 102, name: 'Earth Spirit', rarity: 'SR', image: '', },
    { id: 103, name: 'Viper', rarity: 'SR', image: '', },
    { id: 104, name: 'Sacred Warrior', rarity: 'SR', image: '', },
    { id: 105, name: 'Lord Of Olympia', rarity: 'SR', image: '', },
    { id: 106, name: 'Centaur Warrunner', rarity: 'SR', image: '', },
    { id: 107, name: 'Naga Archer', rarity: 'SR', image: '', },
    { id: 108, name: 'Rogue Warrior', rarity: 'SR', image: '', },
    { id: 109, name: 'Ogre Magi', rarity: 'SR', image: '', },
    { id: 110, name: 'Princess Of Frost', rarity: 'SR', image: '', },
    { id: 111, name: 'Tyrant Bear', rarity: 'SR', image: '', },
    { id: 112, name: 'Raider of Undersea', rarity: 'SR', image: '', },
    { id: 113, name: 'Guardian of Undersea', rarity: 'SR', image: '', },
    { id: 114, name: 'Dragon Slayer Knight', rarity: 'SR', image: '', },
    { id: 115, name: 'Tomb Raider', rarity: 'SR', image: '', },
    { id: 116, name: 'Void Spirit', rarity: 'SR', image: '', },
    { id: 117, name: 'Princess of New Moon', rarity: 'SR', image: '', },
    { id: 118, name: 'Goblin Shredder', rarity: 'SR', image: '', },
    { id: 119, name: 'Prophet', rarity: 'SR', image: '', },

    { id: 201, name: 'Princess of Flame Dragon', rarity: 'SSR', image: '', },
    { id: 202, name: 'Druid', rarity: 'SSR', image: '', },
    { id: 203, name: 'Frost Dragon', rarity: 'SSR', image: '', },
    { id: 204, name: 'Stormcrafter', rarity: 'SSR', image: '', },
    { id: 205, name: 'Venomancer', rarity: 'SSR', image: '', },
    { id: 206, name: 'Lycan', rarity: 'SSR', image: '', },
    { id: 207, name: 'Red Fog Maniac', rarity: 'SSR', image: '', },
    { id: 208, name: 'Messenger Of Darkmoon', rarity: 'SSR', image: '', },
    { id: 209, name: 'Goddess Of Creation', rarity: 'SSR', image: '', },
    { id: 210, name: 'Storm Spirit', rarity: 'SSR', image: '', },
    { id: 211, name: 'Sniper', rarity: 'SSR', image: '', },
    { id: 212, name: 'Mechanic', rarity: 'SSR', image: '', },
    { id: 213, name: 'Ember Spirit', rarity: 'SSR', image: '', },
    { id: 214, name: 'Phantom Swordsman', rarity: 'SSR', image: '', },
  ]

  constructor() { }
}
