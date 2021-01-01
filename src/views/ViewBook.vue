<template>
    <v-container>
        <p>{{islist}}</p>
        <v-row v-if="islist">
           <v-col v-for="book in books.results" :key="book.url" cols="12" lg="3" md="3">
            <v-card @click="cardUpdate(book.url)">
                <v-img
                    :src="book.profile"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="300px"
                >
                    <v-card-title v-text="book.name"></v-card-title>
                </v-img>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                    </v-btn>

                    <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>  
        <v-row v-else>
            <v-col cols="12">
            <v-card>
                <v-img
                    :src="c_id.profile"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="500px"
                >   
                    <v-card-title v-text="c_id.name"></v-card-title>
                </v-img>
                <v-card-text>
                    <v-row
                        align="center"
                        class="mx-0"
                    >
                        <v-rating
                        :value="c_id.rating/2"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="14"
                        ></v-rating>

                        <div class="grey--text ml-4">
                        {{c_id.rating}}
                        </div>
                    </v-row>

                    <div class="my-4 subtitle-1">
                        &#8377; {{c_id.cost}}
                    </div>

                    <div>{{c_id.description}}</div>
                </v-card-text>
                <v-card-actions>
                    <v-btn icon @click="islist = true">
                    <v-icon>mdi-window-close</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                    </v-btn>

                    <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "ViewBook",
    data(){
        return {
            search: '',
            islist: true,
            c_id:null
        }
    },
    methods:{
        cardUpdate(bookid){
            this.islist = false
            this.c_id = this.books.results.filter(val => val.url == bookid)[0]
        },
    },
    created(){
        this.$store.dispatch('getBook')
    },
    computed:{
        books(){
            return this.$store.getters.getBooks
        },
    }
}
</script>