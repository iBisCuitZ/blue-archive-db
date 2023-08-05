export interface Student {
    student: {
        Id: number;
        IsReleased: Array<boolean>;
        DefaultOrder: number;
        PathName: string;
        DevName: string;
        Name: string;
        School: string;
        Club: string;
        StarGrade: number;
        SquadType: string;
        TacticRole: string;
        Summons: Array<any>;
        Position: string;
        BulletType: string;
        ArmorType: string;
        StreetBattleAdaptation: number;
        OutdoorBattleAdaptation: number;
        IndoorBattleAdaptation: number;
        WeaponType: string;
        WeaponImg: string;
        Cover: boolean;
        Equipment: Array<string>;
        CollectionBG: string;
        CollectionTexture: string;
        FamilyName: string;
        FamilyNameRuby: string;
        PersonalName: string;
        SchoolYear: string;
        CharacterAge: string;
        Birthday: string;
        CharacterSSRNew: string;
        ProfileIntroduction: string;
        Hobby: string;
        CharacterVoice: string;
        BirthDay: string;
        Illustrator: string;
        Designer: string;
        CharHeightMetric: string;
        CharHeightImperial: string | null;
        StabilityPoint: number;
        AttackPower1: number;
        AttackPower100: number;
        MaxHP1: number;
        MaxHP100: number;
        DefensePower1: number;
        DefensePower100: number;
        HealPower1: number;
        HealPower100: number;
        DodgePoint: number;
        AccuracyPoint: number;
        CriticalPoint: number;
        CriticalDamageRate: number;
        AmmoCount: number;
        AmmoCost: number;
        Range: number;
        RegenCost: number;
        Skills: Array<object>;
        FavorStatType: Array<string>;
        FavorStatValue: Array<Array<number>>;
        FavorAlts: Array<any>;
        MemoryLobby: Array<number>;
        MemoryLobbyBGM: string;
        FurnitureInteraction: Array<any>;
        FavorItemTags: Array<string>;
        FavorItemUniqueTags: Array<string>;
        IsLimited: number;
        Weapon: object;
        Gear: object;
        SkillExMaterial: Array<any>;
        SkillExMaterialAmount: Array<any>;
        SkillMaterial: Array<any>;
        SkillMaterialAmount: number[][];
    };
}

export interface test {
    student: {
        Id: number;
        Name: string;
        School: string;
        Club: string;
        CollectionBG: string;
        CollectionTexture: string;
    };
}
