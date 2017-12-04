var ByteBuffer = require('byte-buffer')

var newPacket = () => {
  return {
      m_time: 0, //F
      m_lapTime: 0, //F
      m_lapDistance: 0, //F
      m_totalDistance: 0, //F
      m_x: 0,	// World space position F
      m_y: 0, // World space position F
      m_z: 0,	// World space position F
      m_speed: 0,	// Speed of car in MPH F
      m_xv: 0,	// Velocity in world space F
      m_yv: 0,	// Velocity in world space F
      m_zv: 0,	// Velocity in world space F
      m_xr: 0,	// World space right direction F
      m_yr: 0,	// World space right direction F
      m_zr: 0,	// World space right direction F
      m_xd: 0,	// World space forward direction F
      m_yd: 0,	// World space forward direction F
      m_zd: 0,	// World space forward direction F
      m_susp_pos: [0, 0, 0, 0], // F array
      m_susp_vel: [0, 0, 0, 0],	// RL, RR, FL, FR  F array
      m_wheel_speed: [0, 0, 0, 0], // F array
      m_throttle: 0, // F
      m_steer: 0, // F
      m_brake: 0, // F
      m_clutch: 0, // F
      m_gear: 0, // F
      m_gforce_lat: 0, // F
      m_gforce_lon: 0, // F
      m_lap: 0, // F
      m_engineRate: 0, // F
      m_sli_pro_native_support: 0, // F	// SLI Pro support
      m_car_position: 0, // F	// car race position
      m_kers_level: 0, // F	// kers energy left
      m_kers_max_level: 0, // F	// kers maximum energy
      m_drs: 0, // F	// 0 = off, 1 = on
      m_traction_control: 0, // F	// 0 (off) - 2 (high)
      m_anti_lock_brakes: 0, // F	// 0 (off) - 1 (on)
      m_fuel_in_tank: 0, // F	// current fuel mass
      m_fuel_capacity: 0, // F	// fuel capacity
      m_in_pits: 0, // F	// 0 = none, 1 = pitting, 2 = in pit area
      m_sector: 0, // F	// 0 = sector1, 1 = sector2, 2 = sector3
      m_sector1_time: 0, // F	// time of sector1 (or 0)
      m_sector2_time: 0, // F	// time of sector2 (or 0)
      m_brakes_temp: [0, 0, 0, 0],	// brakes temperature (centigrade)
      m_tyres_pressure: [0, 0, 0, 0],	// tyres pressure PSI
      m_team_info: 0, // F	// team ID 
      m_total_laps: 0, // F	// total number of laps in this race
      m_track_size: 0, // F	// track size meters
      m_last_lap_time: 0, // F	// last lap time
      m_max_rpm: 0,	// cars max RPM, at which point the rev limiter will kick in
      m_idle_rpm: 0,	// cars idle RPM
      m_max_gears: 0,	// maximum number of gears
      m_sessionType: 0,	// 0 = unknown, 1 = practice, 2 = qualifying, 3 = race
      m_drsAllowed: 0,	// 0 = not allowed, 1 = allowed, -1 = invalid / unknown
      m_track_number: 0,	// -1 for unknown, 0-21 for tracks
      m_vehicleFIAFlags: 0,	// -1 = invalid/unknown, 0 = none, 1 = green, 2 = blue, 3 = yellow, 4 = red
      m_era: 0, // era, 2017 (modern) or 1980 (classic)
      m_engine_temperature: 0,  	// engine temperature (centigrade)
      m_gforce_vert: 0,	// vertical g-force component
      m_ang_vel_x: 0,	// angular velocity x-component
      m_ang_vel_y: 0,	// angular velocity y-component
      m_ang_vel_z: 0,	// angular velocity z-component

      m_tyres_temperature: [0, 0, 0, 0],	// tyres temperature (centigrade)
      m_tyres_wear: [0, 0, 0, 0],	// tyre wear percentage
      m_tyre_compound: 0,	// compound of tyre – 0 = ultra soft, 1 = super soft, 2 = soft, 3 = medium, 4 = hard, 5 = inter, 6 = wet
      m_front_brake_bias: 0,         // front brake bias (percentage)
      m_fuel_mix: 0,                 // fuel mix - 0 = lean, 1 = standard, 2 = rich, 3 = max
      m_currentLapInvalid: 0,   	// current lap invalid - 0 = valid, 1 = invalid
      m_tyres_damage: [0, 0, 0, 0],	// tyre damage (percentage)
      m_front_left_wing_damage: 0,	// front left wing damage (percentage)
      m_front_right_wing_damage: 0,	// front right wing damage (percentage)    
      m_rear_wing_damage: 0,	// rear wing damage (percentage)
      m_engine_damage: 0,	// engine damage (percentage)
      m_gear_box_damage: 0,	// gear box damage (percentage)
      m_exhaust_damage: 0,	// exhaust damage (percentage)
      m_pit_limiter_status: 0,	// pit limiter status – 0 = off, 1 = on
      m_pit_speed_limit: 0,	// pit speed limit in mph
      m_session_time_left: 0,  // NEW: time left in session in seconds 
      m_rev_lights_percent: 0,  // NEW: rev lights indicator (percentage)
      m_is_spectating: 0,  // NEW: whether the player is spectating
      m_spectator_car_index: 0 // NEW: index of the car being spectated
  }
}

var structure = {
  fromPacket: (packet) => { //TODO: Improve this
    var parsedPacket = new ByteBuffer(packet, ByteBuffer.LITTLE_ENDIAN)

    var cleanPacket = {
      m_time: parsedPacket.readFloat(), //F
      m_lapTime: parsedPacket.readFloat(), //F
      m_lapDistance: parsedPacket.readFloat(), //F
      m_totalDistance: parsedPacket.readFloat(), //F
      m_x: parsedPacket.readFloat(),	// World space position F
      m_y: parsedPacket.readFloat(), // World space position F
      m_z: parsedPacket.readFloat(),	// World space position F
      m_speed: parsedPacket.readFloat(),	// Speed of car in MPH F
      m_xv: parsedPacket.readFloat(),	// Velocity in world space F
      m_yv: parsedPacket.readFloat(),	// Velocity in world space F
      m_zv: parsedPacket.readFloat(),	// Velocity in world space F
      m_xr: parsedPacket.readFloat(),	// World space right direction F
      m_yr: parsedPacket.readFloat(),	// World space right direction F
      m_zr: parsedPacket.readFloat(),	// World space right direction F
      m_xd: parsedPacket.readFloat(),	// World space forward direction F
      m_yd: parsedPacket.readFloat(),	// World space forward direction F
      m_zd: parsedPacket.readFloat(),	// World space forward direction F
      m_susp_pos: [parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat()], // F array
      m_susp_vel: [parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat()],	// RL, RR, FL, FR  F array
      m_wheel_speed: [parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat()], // F array
      m_throttle: parsedPacket.readFloat(), // F
      m_steer: parsedPacket.readFloat(), // F
      m_brake: parsedPacket.readFloat(), // F
      m_clutch: parsedPacket.readFloat(), // F
      m_gear: parsedPacket.readFloat(), // F
      m_gforce_lat: parsedPacket.readFloat(), // F
      m_gforce_lon: parsedPacket.readFloat(), // F
      m_lap: parsedPacket.readFloat(), // F
      m_engineRate: parsedPacket.readFloat(), // F
      m_sli_pro_native_support: parsedPacket.readFloat(), // F	// SLI Pro support
      m_car_position: parsedPacket.readFloat(), // F	// car race position
      m_kers_level: parsedPacket.readFloat(), // F	// kers energy left
      m_kers_max_level: parsedPacket.readFloat(), // F	// kers maximum energy
      m_drs: parsedPacket.readFloat(), // F	// 0 = off, 1 = on
      m_traction_control: parsedPacket.readFloat(), // F	// 0 (off) - 2 (high)
      m_anti_lock_brakes: parsedPacket.readFloat(), // F	// 0 (off) - 1 (on)
      m_fuel_in_tank: parsedPacket.readFloat(), // F	// current fuel mass
      m_fuel_capacity: parsedPacket.readFloat(), // F	// fuel capacity
      m_in_pits: parsedPacket.readFloat(), // F	// 0 = none, 1 = pitting, 2 = in pit area
      m_sector: parsedPacket.readFloat(), // F	// 0 = sector1, 1 = sector2, 2 = sector3
      m_sector1_time: parsedPacket.readFloat(), // F	// time of sector1 (or 0)
      m_sector2_time: parsedPacket.readFloat(), // F	// time of sector2 (or 0)
      m_brakes_temp: [parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat()],	// brakes temperature (centigrade)
      m_tyres_pressure: [parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat(), parsedPacket.readFloat()],	// tyres pressure PSI
      m_team_info: parsedPacket.readFloat(), // F	// team ID 
      m_total_laps: parsedPacket.readFloat(), // F	// total number of laps in this race
      m_track_size: parsedPacket.readFloat(), // F	// track size meters
      m_last_lap_time: parsedPacket.readFloat(), // F	// last lap time
      m_max_rpm: parsedPacket.readFloat(),	// cars max RPM, at which point the rev limiter will kick in
      m_idle_rpm: parsedPacket.readFloat(),	// cars idle RPM
      m_max_gears: parsedPacket.readFloat(),	// maximum number of gears
      m_sessionType: parsedPacket.readFloat(),	// 0 = unknown, 1 = practice, 2 = qualifying, 3 = race
      m_drsAllowed: parsedPacket.readFloat(),	// 0 = not allowed, 1 = allowed, -1 = invalid / unknown
      m_track_number: parsedPacket.readFloat(),	// -1 for unknown, 0-21 for tracks
      m_vehicleFIAFlags: parsedPacket.readFloat(),	// -1 = invalid/unknown, 0 = none, 1 = green, 2 = blue, 3 = yellow, 4 = red
      m_era: parsedPacket.readFloat(), // era, 2017 (modern) or 1980 (classic)
      m_engine_temperature: parsedPacket.readFloat(),  	// engine temperature (centigrade)
      m_gforce_vert: parsedPacket.readFloat(),	// vertical g-force component
      m_ang_vel_x: parsedPacket.readFloat(),	// angular velocity x-component
      m_ang_vel_y: parsedPacket.readFloat(),	// angular velocity y-component
      m_ang_vel_z: parsedPacket.readFloat(),	// angular velocity z-component

      m_tyres_temperature: [parsedPacket.readByte(), parsedPacket.readByte(), parsedPacket.readByte(), parsedPacket.readByte()],	// tyres temperature (centigrade)
      m_tyres_wear: [parsedPacket.readByte(), parsedPacket.readByte(), parsedPacket.readByte(), parsedPacket.readByte()],	// tyre wear percentage
      m_tyre_compound: parsedPacket.readByte(),	// compound of tyre – 0 = ultra soft, 1 = super soft, 2 = soft, 3 = medium, 4 = hard, 5 = inter, 6 = wet
      m_front_brake_bias: parsedPacket.readByte(),         // front brake bias (percentage)
      m_fuel_mix: parsedPacket.readByte(),                 // fuel mix - 0 = lean, 1 = standard, 2 = rich, 3 = max
      m_currentLapInvalid: parsedPacket.readByte(),   	// current lap invalid - 0 = valid, 1 = invalid
      m_tyres_damage: [parsedPacket.readByte(), parsedPacket.readByte(), parsedPacket.readByte(), parsedPacket.readByte()],	// tyre damage (percentage)
      m_front_left_wing_damage: parsedPacket.readByte(),	// front left wing damage (percentage)
      m_front_right_wing_damage: parsedPacket.readByte(),	// front right wing damage (percentage)    
      m_rear_wing_damage: parsedPacket.readByte(),	// rear wing damage (percentage)
      m_engine_damage: parsedPacket.readByte(),	// engine damage (percentage)
      m_gear_box_damage: parsedPacket.readByte(),	// gear box damage (percentage)
      m_exhaust_damage: parsedPacket.readByte(),	// exhaust damage (percentage)
      m_pit_limiter_status: parsedPacket.readByte(),	// pit limiter status – 0 = off, 1 = on
      m_pit_speed_limit: parsedPacket.readByte(),	// pit speed limit in mph
      m_session_time_left: parsedPacket.readFloat(),  // NEW: time left in session in seconds 
      m_rev_lights_percent: parsedPacket.readByte(),  // NEW: rev lights indicator (percentage)
      m_is_spectating: parsedPacket.readByte(),  // NEW: whether the player is spectating
      m_spectator_car_index: parsedPacket.readByte() // NEW: index of the car being spectated

    }

      // // Car data

      // byte  m_num_cars;              	// number of cars in data

      // byte  m_player_car_index;        	// index of player's car in the array

      // CarUDPData  m_car_data[20];   // data for all cars on track



      // float m_yaw;  // NEW (v1.8)

      // float m_pitch;  // NEW (v1.8)

      // float m_roll;  // NEW (v1.8)

      // float m_x_local_velocity;          // NEW (v1.8) Velocity in local space

      // float m_y_local_velocity;          // NEW (v1.8) Velocity in local space

      // float m_z_local_velocity;          // NEW (v1.8) Velocity in local space

      // float m_susp_acceleration[4];   // NEW (v1.8) RL, RR, FL, FR

      // float m_ang_acc_x;                 // NEW (v1.8) angular acceleration x-component

      // float m_ang_acc_y;                 // NEW (v1.8) angular acceleration y-component

      // float m_ang_acc_z;                 // NEW (v1.8) angular acceleration z-component

      
    return cleanPacket
  }
}

module.exports = structure