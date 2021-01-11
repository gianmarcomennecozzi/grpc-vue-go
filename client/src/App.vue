<template>
    <router-view></router-view>
</template>

<script>
    import {DaemonClient} from "daemon_grpc_web_pb"
    import {ExerciseStoreClient} from "exercise_grpc_web_pb"
    export default {
        name: 'app'
    };
    export const daemonclient = new DaemonClient(window.location.protocol+"//"+window.location.hostname+":8000", null, null);

    //todo change it in a better way
    export const token = process.env.EX_TOKEN

    export const ExerciseClient = new ExerciseStoreClient(window.location.protocol+"//"+window.location.hostname+":8000", null, null);

</script>
