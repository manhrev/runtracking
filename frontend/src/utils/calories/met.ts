export const MET_CYCLING = 7.5

// speed: m/s
export function metCycling(speed: number) {
  return speed * 3.6 * 0.1 + 1.8
}

// pace: minutes/km
export function metRunningByPace(pace: number) {
  const paceConv = pace / 0.621371192
  if (paceConv >= 13) {
    return 6
  } else if (pace >= 12 && pace < 13) {
    return 8.3
  } else if (pace >= 11.5 && pace < 12) {
    return 9
  } else if (pace >= 10 && pace < 11.5) {
    return 9.8
  } else if (pace >= 9 && pace < 10) {
    return 10.5
  } else if (pace >= 8.5 && pace < 9) {
    return 11
  } else if (pace >= 8 && pace < 8.5) {
    return 11.5
  } else if (pace >= 7.5 && pace < 8) {
    return 11.8
  } else if (pace >= 7 && pace < 7.5) {
    return 12.3
  } else if (pace >= 6.5 && pace < 7) {
    return 12.8
  } else if (pace >= 6 && pace < 6.5) {
    return 14.5
  } else if (pace >= 5.5 && pace < 6) {
    return 16
  } else if (pace >= 5 && pace < 5.5) {
    return 19
  } else if (pace >= 4.6 && pace < 5) {
    return 19.8
  } else {
    return 23
  }
}

// speed: m/s
export function metRunning(speed: number) {
  return speed * 3.6 * 0.2 + 3.5
}

export function metWalking(speed: number) {
  return speed * 3.6 * 0.1 + 1.8
}
