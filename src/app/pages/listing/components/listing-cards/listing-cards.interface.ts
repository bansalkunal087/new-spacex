interface ILaunchProgram {
    mission_name: String,
    flight_number: Number,
    launch_year: String,
    launch_success: Boolean,
    mission_id: Array<String>,
    links: {}
}

export {
    ILaunchProgram
};