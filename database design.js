
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
                        attachements: [{
                            name: 'Report-001',
                            url: 'htps://xyz.com'
                        }],
                        inspections: [
                            {
                                id: 'insp-001',
                                tmm: '3.3',
                                date_of_inspection: new Date(),
                                locations: {
                                    'l-1': {
                                        ut: {

                                        },
                                        paut: {

                                        },
                                        thickness: {

                                        },
                                        rt: {

                                        },
                                        visual: {

                                        }
                                    },
                                    'l-2': {
                                        ut: {

                                        },
                                        paut: {

                                        },
                                        thickness: {

                                        },
                                        rt: {

                                        },
                                        visual: {

                                        }
                                    }
                                },
                                attachements: [{
                                    name: 'Report-001',
                                    url: 'htps://xyz.com'
                                }],
                            }
                        ]
                    },
                ],
                attachements: [
                    {
                        name: 'Report-001',
                        url: 'htps://xyz.com'
                    }
                ],

            }
        ]
    }
]