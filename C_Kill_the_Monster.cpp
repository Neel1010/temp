// Heisenberg
#include <bits/stdc++.h>
using namespace std;
#define ll long long
const int mod = 1e9 + 7;

void solve() {
    ll hc,dc,hm,dm,k,w,a;
    cin >> hc >> dc >> hm >> dm >> k >> w >> a;
    for (ll x=0;x<=k; ++x) {
        
        ll lhs = (hc+a*x)/(dm)+(((hc+a*x)%(dm))>0);
        ll rhs = (hm)/(dc+(k-x)*w)+(((hm)%(dc+(k-x)*w))>0);
        // cout << x << " " << lhs << " " << rhs << "\n";
        if (lhs >= rhs) {
            cout <<"YES\n";
            return;
        }
    }
    cout << "NO\n";
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    // freopen("input.txt", "r", stdin);
    // freopen("output.txt", "w", stdout);
    int t;
    cin>>t;
    while(t--) {
        solve();
    }
    return 0;
}
