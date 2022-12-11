#include <bits/stdc++.h>

using namespace std;

int main()
{
    ofstream file;
    file.open("array.txt");
    if (!file)
        cout << "File couldn't be created successfully" << endl;
    for (int i = 0; i < 100000; i++)
    {
        file << rand() % 1000;
        file << endl;
    }

    file.close();
}