def trueReturn(data, msg):
    return {
        "status": True,
        "data": data,
        "msg": msg
    }


def falseReturn(msg, data=None):
    return {
        "status": False,
        "data": data,
        "msg": msg
    }

