function superbowlWin(record) {
    const win = record.find(entry => entry.year === '2015' && entry.result=="W");
    return win ? win.year : undefined;
}


