<template>
    <div id="formulaire">
        <form @submit.prevent='submit'>
            <input v-if="nom == 'on'" type='text' placeholder='Indiquez votre nom' required v-model="infos.nom"><br>
            
            <input v-if="prenom == 'on'" type='text' placeholder='Indiquez votre prenom' required v-model="infos.prenom"><br>
            
            <input v-if="mail == 'on'" type='email' placeholder='Indiquez votre mail' required v-model="infos.mail"><br>
            
            <input v-if="tel == 'on'" type='text' placeholder='Indiquez votre numéro de téléphone' required v-model="infos.tel"><br>
            
            <input v-if="message == 'on'" type='textarea' placeholder='Votre message' required v-model="infos.message"><br>
            
            <button type="submit" >Envoyer</button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            infos: {
                nom: "",
                prenom: "",
                mail: "",
                tel: "",
                message: "",
            }
        }
    },
    props: {
        nom: {
            default: 'off',
            type: String
        },
        prenom: {
            default: 'off',
            type: String
        },
        mail: {
            default: 'off',
            type: String
        },
        tel: {
            default: 'off',
            type: String
        },
        message: {
            default: 'off',
            type: String
        },
    },
    methods:{
        submit(){
            
            console.log(this.infos)

        },
        checkIfSet(item){
            if(item !== undefined)
            {
                return true
            }
        }
    }
}
</script>

<style>

</style>
