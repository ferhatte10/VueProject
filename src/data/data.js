
const getData = (data,type) => {
    switch (type) {
        case "ecoles": {
            let ecoles = []
            data.filter(elm => {

                if (!ecoles.includes(elm[2])) {
                    ecoles.push(elm[2])
                }
            })
            return ecoles.sort()
            break
        }

        case "branches" : {
            let branches = []
            data.filter(elm => {
                elm[4].forEach(branche => {
                    if (!branches.includes(branche[0])) {
                        branches.push(branche[0])
                    }
                })
            })
            return branches.sort()
            break
        }

        case "cls&domn" : {
            let Classes_Domaines = []
            data.filter(elm => {
                elm[3].forEach(Classe => {
                    if (!Classes_Domaines.includes(Classe)) {
                        Classes_Domaines.push(Classe)
                    }
                })
            })
            return Classes_Domaines.sort()
            break
        }

        case "livre" : {
            let livres = []
            data.filter(elm => {
                if (!livres.includes(elm[0])) {
                    livres.push(elm[0])
                }
            })
            return livres.sort()
            break
        }
        default : {
            return "no type is given to the function"
            break
        }
    }
}

exports.module = {
    getData
}



