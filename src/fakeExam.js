const fakeExam=[
    {
        id:'e1',
        title:'CSE Term Test 1',
        date:'20 Augest 2020',
        time:'11:45AM',
        status:'Finished',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        participants:{
            reg:[131401,
                131402,
                131403
            ]
        }
    },
    {
        id:'e2',
        title:'CSE Term Test 2',
        date:'22 Augest 2020',
        time:'10:00AM',
        status:'Finished',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        participants:{
            reg:[131401,
                131402,
                131403
            ]
        }
    },
    {
        id:'e3',
        title:'CSE Term Test 3',
        date:'24 Augest 2020',
        time:'12:45AM',
        status:'Running',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
        participants:{
            reg:[131401,
                131402,
                131403
            ]
        },
        questions:[
            {
                title:'What is the right way to declare variable ?',
                option:['int a','int 56a','int $56a','int _a']
            },
            {
                title:'What is the range of nteger ?',

            },
            {
                title:'Write a C program to find the nth prime number ?'
            },
            {
                title:'Write the steps of DFS'
            }
        ]
    }
]
export default fakeExam;