
export const models = [
    {
        id: 'm0001',
        name: 'Main Steam Line',
        model: "/Models/ms line.glb",
        equipments: [
            {
                id: 'equip-001',
                name: 'MS Pipe line',
                year_of_construction: '2001',
                construction_code: 'ASME Sec-D Dev-II',
                components: [
                    {
                        id: 'B-1',
                        name: 'Bend-001',
                        mat: 'AS',
                        D: '323.3',
                        to: '9',
                        attachements: []
                    },
                ],
                attachements: [],
                inspections: []
            }
        ]
    },
    {
        id: 'm002',
        name: 'Pressure Vessel-1',
        model: "/Models/pv.glb",
        equipments: [
            {
                id: 'equip-001',
                name: 'MS Pipe line',
                year_of_construction: '2001',
                construction_code: 'ASME Sec-D Dev-II',
                components: [
                    {
                        id: 'B-1',
                        name: 'Bend-001',
                        mat: 'AS',
                        D: '323.3',
                        to: '9',
                        attachements: []
                    },
                ],
                attachements: [],
                inspections: []
            }
        ]
    },
    {
        id: 'm003',
        name: 'Vertical Column',
        model: '/Models/pv-v-1-m.glb',
        equipments: [
            {
                id: 'equip-001',
                name: 'MS Pipe line',
                year_of_construction: '2001',
                construction_code: 'ASME Sec-D Dev-II',
                components: [
                    {
                        id: 'B-1',
                        name: 'Bend-001',
                        mat: 'AS',
                        D: '323.3',
                        to: '9',
                        attachements: []
                    },
                ],
                attachements: [],
                inspections: []
            }
        ]
    },
     {
        id: 'm004',
        name: 'Plant-001',
        model: '/Models/tank plant.glb',
        equipments: [
            {
                id: 'tank-001',
                name: 'Tank-001',
                year_of_construction: '2001',
                construction_code: 'ASME Sec-D Dev-II',
                components: [
                    {
                        id: 'B-1',
                        name: 'Bend-001',
                        mat: 'AS',
                        D: '323.3',
                        to: '9',
                        attachements: []
                    },
                ],
                attachements: [],
                inspections: []
            }
        ]
    }
]


export const inspections = [
    {
        id: 'insp-001',
        type: 'thickness',
        tmm: '3.3',
        date_of_inspection: new Date(),
        locations: [

        ],
        attachements: [],
    }
]



export const data = [
    {
        id: 'msline',
        name: 'Main Steam Line',
        model: "/Models/ms line.glb",
        components: {
            'B-1': {
                name: 'Bend-1',
                InstallationYear: 2000,
                T: 544,
                D: 51,
                tn: 8,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.7
            },
            'B-2': {
                name: 'Bend-2',
                InstallationYear: 2000,
                T: 544,
                D: 51,
                tn: 8,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.7
            },
            'B-3': {
                name: 'Bend-3',
                InstallationYear: 2000,
                T: 544,
                D: 51,
                tn: 8,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.7
            },
            'B-4': {
                name: 'Bend-4',
                InstallationYear: 2000,
                T: 544,
                D: 51,
                tn: 8,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.7
            },
            'SP-1': {
                name: 'Straight Piece-1',
                InstallationYear: 2000,
                T: 544,
                D: 51,
                tn: 8,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.7
            }
        }
    },
    {
        id: 'pv-1',
        name: 'Pressure Vessel-1',
        model: "/Models/pv.glb",
        components: {
            'Dish-End-1': {
                name: 'Dish-End-1',
                InstallationYear: 2000,
                T: 544,
                D: 51,
                tn: 8,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.3
            },
            'Dish-End-2': {
                name: 'Dish-End-2',
                InstallationYear: 2000,
                T: 544,
                D: 51,
                tn: 8,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.7
            },
            'Shell': {
                name: 'Shell',
                InstallationYear: 2000,
                T: 544,
                D: 51,
                tn: 8,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.5
            }
        }
    },
    {
        id: 'pv-v-1',
        name: 'Vertical Column',
        model: '/Models/pv-v-1-m.glb',
        components: {
            'Shell-1': {
                name: 'Shell-1',
                InstallationYear: 2000,
                T: 544,
                D: 2100,
                tn: 132,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.2
            },
            'Shell-2': {
                name: 'Shell-2',
                InstallationYear: 2000,
                T: 544,
                D: 2100,
                tn: 132,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.7
            },
            'Shell-3': {
                name: 'Shell-3',
                InstallationYear: 2000,
                T: 544,
                D: 2100,
                tn: 132,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.4
            },
            'Shell-4': {
                name: 'Shell-4',
                InstallationYear: 2000,
                T: 544,
                D: 2100,
                tn: 132,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.8
            },
            'Shell-5': {
                name: 'Shell-5',
                InstallationYear: 2000,
                T: 544,
                D: 2100,
                tn: 132,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.9
            },
            'Nozzle-1': {
                name: 'Nozzle-1',
                InstallationYear: 2000,
                T: 544,
                D: 2100,
                tn: 132,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.2
            },
            'Plateform-1': {
                name: 'Platform-1',
                InstallationYear: 2000,
                T: 544,
                D: 2100,
                tn: 132,
                tr: 3.5,
                mat: 'SA 335 p11',
                criticality: 0.5
            }
        }
    }
]