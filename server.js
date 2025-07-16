<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Athletics Intelligence Platform</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #0d1117 0%, #161b22 50%, #21262d 100%);
            color: #ffffff;
            min-height: 100vh;
            overflow-x: hidden;
        }

        .ai-grid-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(58, 123, 213, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(58, 123, 213, 0.05) 1px, transparent 1px);
            background-size: 60px 60px;
            z-index: -1;
            animation: gridPulse 4s ease-in-out infinite;
        }

        @keyframes gridPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.1; }
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            position: relative;
            z-index: 1;
        }

        .hero {
            text-align: center;
            margin-bottom: 60px;
        }

        .hero h1 {
            font-size: 4.5rem;
            font-weight: 800;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #ffffff 0%, #3a7bd5 50%, #00d2ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            line-height: 1.1;
            text-shadow: 0 0 40px rgba(58, 123, 213, 0.3);
        }

        .hero .ai-badge {
            display: inline-flex;
            align-items: center;
            background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
            color: #000;
            padding: 8px 20px;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 700;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 1px;
            animation: aiPulse 3s ease-in-out infinite;
        }

        @keyframes aiPulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(58, 123, 213, 0.3); }
            50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(0, 210, 255, 0.5); }
        }

        .hero .subtitle {
            font-size: 1.4rem;
            color: #8b949e;
            margin-bottom: 40px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.6;
        }

        .ai-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            margin-bottom: 80px;
        }

        .ai-feature-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(58, 123, 213, 0.2);
            border-radius: 16px;
            padding: 30px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .ai-feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, transparent, #3a7bd5, transparent);
            transition: left 0.5s ease;
        }

        .ai-feature-card:hover::before {
            left: 100%;
        }

        .ai-feature-card:hover {
            background: rgba(58, 123, 213, 0.05);
            border-color: rgba(58, 123, 213, 0.4);
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(58, 123, 213, 0.15);
        }

        .ai-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 2rem;
            box-shadow: 0 10px 20px rgba(58, 123, 213, 0.3);
            animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .ai-feature-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 15px;
        }

        .ai-feature-description {
            color: #8b949e;
            line-height: 1.6;
            font-size: 1rem;
        }

        .main-analyzer {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(58, 123, 213, 0.2);
            border-radius: 20px;
            padding: 50px;
            margin-bottom: 40px;
            position: relative;
        }

        .main-analyzer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, #3a7bd5, transparent);
        }

        .analyzer-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .analyzer-title {
            font-size: 2.2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 15px;
        }

        .analyzer-subtitle {
            font-size: 1.1rem;
            color: #8b949e;
            max-width: 600px;
            margin: 0 auto;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 30px;
            margin-bottom: 30px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-label {
            display: block;
            font-size: 0.95rem;
            font-weight: 600;
            color: #8b949e;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .form-input {
            width: 100%;
            padding: 18px 24px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            color: #fff;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-input::placeholder {
            color: rgba(255, 255, 255, 0.4);
        }

        .form-input:focus {
            outline: none;
            border-color: #3a7bd5;
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.1);
            transform: translateY(-2px);
        }

        .team-suggestions {
            margin-top: 15px;
        }

        .suggestions-label {
            font-size: 0.8rem;
            color: #6c757d;
            margin-bottom: 10px;
            display: block;
        }

        .team-pills {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .team-pill {
            background: rgba(58, 123, 213, 0.1);
            border: 1px solid rgba(58, 123, 213, 0.2);
            color: #8b949e;
            padding: 8px 16px;
            border-radius: 16px;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .team-pill:hover {
            background: rgba(58, 123, 213, 0.2);
            border-color: rgba(58, 123, 213, 0.4);
            color: #3a7bd5;
            transform: translateY(-2px);
        }

        .ai-analyze-btn {
            width: 100%;
            background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
            border: none;
            padding: 20px 50px;
            border-radius: 12px;
            color: #000;
            font-weight: 700;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .ai-analyze-btn:hover:not(:disabled) {
            transform: translateY(-3px);
            box-shadow: 0 20px 40px rgba(58, 123, 213, 0.4);
        }

        .ai-analyze-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        .ai-loading-spinner {
            display: none;
            width: 24px;
            height: 24px;
            border: 3px solid rgba(0, 0, 0, 0.3);
            border-radius: 50%;
            border-top-color: #000;
            animation: aiSpin 1s ease-in-out infinite;
            margin-right: 12px;
        }

        @keyframes aiSpin {
            to { transform: rotate(360deg); }
        }

        .ai-results {
            margin-top: 50px;
        }

        .results-header {
            text-align: center;
            margin-bottom: 40px;
        }

        .results-title {
            font-size: 2rem;
            font-weight: 700;
            color: #3a7bd5;
            margin-bottom: 10px;
        }

        .results-subtitle {
            color: #8b949e;
            font-size: 1.1rem;
        }

        .ai-status-badge {
            display: inline-block;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-left: 15px;
        }

        .ai-status-badge.live {
            background: rgba(0, 255, 136, 0.2);
            color: #00ff88;
            border: 1px solid rgba(0, 255, 136, 0.3);
        }

        .ai-status-badge.simulated {
            background: rgba(255, 193, 7, 0.2);
            color: #ffc107;
            border: 1px solid rgba(255, 193, 7, 0.3);
        }

        .ai-summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .ai-summary-card {
            background: rgba(58, 123, 213, 0.05);
            border: 1px solid rgba(58, 123, 213, 0.2);
            border-radius: 12px;
            padding: 25px;
            text-align: center;
        }

        .summary-value {
            font-size: 2.5rem;
            font-weight: 800;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .summary-label {
            font-size: 0.9rem;
            color: #8b949e;
            font-weight: 500;
        }

        .ai-opportunity-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 25px;
            transition: all 0.3s ease;
            position: relative;
        }

        .ai-opportunity-card:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: rgba(58, 123, 213, 0.2);
            transform: translateY(-4px);
        }

        /* NEW: AI Citation Gap styling */
        .ai-opportunity-card.ai-citation-gap {
            border: 2px solid rgba(255, 136, 0, 0.3);
            background: rgba(255, 136, 0, 0.05);
        }

        .ai-opportunity-card.ai-citation-gap::before {
            content: '🤖 AI CITATION GAP';
            position: absolute;
            top: -12px;
            left: 20px;
            background: linear-gradient(135deg, #ff8800 0%, #ffaa00 100%);
            color: #000;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.7rem;
            font-weight: 700;
            letter-spacing: 0.5px;
        }

        .opportunity-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
        }

        .priority-badge {
            background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
            color: #000;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 1.3rem;
            margin-right: 20px;
            flex-shrink: 0;
        }

        .ai-citation-gap .priority-badge {
            background: linear-gradient(135deg, #ff8800 0%, #ffaa00 100%);
        }

        .opportunity-info {
            flex-grow: 1;
        }

        .opportunity-keyword {
            font-size: 1.3rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 8px;
        }

        .opportunity-type {
            color: #8b949e;
            font-size: 0.95rem;
        }

        .ai-score {
            background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
            color: #000;
            padding: 10px 20px;
            border-radius: 25px;
            font-weight: 700;
            font-size: 0.9rem;
            min-width: 100px;
            text-align: center;
        }

        .ai-citation-gap .ai-score {
            background: linear-gradient(135deg, #ff8800 0%, #ffaa00 100%);
        }

        .opportunity-details {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .detail-card {
            background: rgba(255, 255, 255, 0.03);
            padding: 20px;
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .detail-title {
            font-weight: 700;
            color: #3a7bd5;
            margin-bottom: 10px;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .detail-content {
            color: #8b949e;
            font-size: 0.95rem;
            line-height: 1.5;
        }

        /* NEW: AI Overview specific styling */
        .ai-overview-section {
            margin-top: 20px;
            padding: 20px;
            background: rgba(255, 136, 0, 0.1);
            border: 1px solid rgba(255, 136, 0, 0.3);
            border-radius: 12px;
        }

        .ai-overview-title {
            font-weight: 700;
            color: #ff8800;
            margin-bottom: 15px;
            font-size: 1rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .ai-citation-status {
            margin-bottom: 15px;
        }

        .citation-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 16px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-right: 10px;
        }

        .citation-badge.cited {
            background: rgba(0, 255, 136, 0.2);
            color: #00ff88;
            border: 1px solid rgba(0, 255, 136, 0.3);
        }

        .citation-badge.not-cited {
            background: rgba(255, 107, 107, 0.2);
            color: #ff6b6b;
            border: 1px solid rgba(255, 107, 107, 0.3);
        }

        .cited-text {
            background: rgba(255, 255, 255, 0.05);
            padding: 15px;
            border-radius: 8px;
            font-style: italic;
            margin-top: 10px;
            border-left: 3px solid #ff8800;
        }

        .competitor-citations {
            margin-top: 15px;
        }

        .competitor-citation {
            background: rgba(255, 255, 255, 0.03);
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 10px;
            border-left: 3px solid #ff6b6b;
        }

        .competitor-domain {
            font-weight: 600;
            color: #ff6b6b;
            margin-bottom: 5px;
        }

        .competitor-quote {
            font-size: 0.9rem;
            color: #8b949e;
            font-style: italic;
        }

        .ai-insights {
            margin-top: 40px;
            padding: 35px;
            background: linear-gradient(135deg, rgba(58, 123, 213, 0.1) 0%, rgba(0, 210, 255, 0.05) 100%);
            border: 1px solid rgba(58, 123, 213, 0.2);
            border-radius: 16px;
        }

        .insights-title {
            margin-bottom: 20px;
            font-size: 1.4rem;
            color: #3a7bd5;
            font-weight: 700;
        }

        .insight-item {
            background: rgba(255, 255, 255, 0.03);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .loading {
            text-align: center;
            color: #8b949e;
            padding: 60px;
            font-style: italic;
            font-size: 1.1rem;
        }

        .error {
            color: #ff6b6b;
            background: rgba(255, 107, 107, 0.1);
            border: 1px solid rgba(255, 107, 107, 0.3);
            padding: 25px;
            border-radius: 12px;
            margin: 25px 0;
            text-align: center;
        }

        .success {
            color: #00ff88;
            background: rgba(0, 255, 136, 0.1);
            border: 1px solid rgba(0, 255, 136, 0.3);
            padding: 25px;
            border-radius: 12px;
            margin: 25px 0;
            text-align: center;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 3rem;
            }
            .container {
                padding: 30px 15px;
            }
            .form-grid {
                grid-template-columns: 1fr;
            }
            .opportunity-details {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="ai-grid-bg"></div>
    
    <div class="container">
        <!-- Hero Section -->
        <div class="hero">
            <div class="ai-badge">🤖 AI-POWERED SEO + AI OVERVIEW INTELLIGENCE</div>
            <h1>College Sports SEO Intelligence</h1>
            <p class="subtitle">Discover untapped revenue opportunities through AI-driven search gap analysis. Find where your competitors are winning ticket sales, fan engagement, and AI citations.</p>
        </div>

        <!-- Features Grid -->
        <div class="ai-features">
            <div class="ai-feature-card">
                <div class="ai-icon">🎯</div>
                <div class="ai-feature-title">Revenue Gap Analysis</div>
                <div class="ai-feature-description">Identify where ticket resellers are capturing your revenue through advanced SERP analysis and competitor intelligence.</div>
            </div>
            <div class="ai-feature-card">
                <div class="ai-icon">🤖</div>
                <div class="ai-feature-title">AI Overview Citation Tracking</div>
                <div class="ai-feature-description">NEW: Track citations in Google's AI Overview responses. See when competitors get cited instead of your official sources.</div>
            </div>
            <div class="ai-feature-card">
                <div class="ai-icon">💡</div>
                <div class="ai-feature-title">AI-Driven Recommendations</div>
                <div class="ai-feature-description">Smart content suggestions and SEO strategies tailored specifically for college athletics marketing teams.</div>
            </div>
        </div>

        <!-- Main Analyzer -->
        <div class="main-analyzer">
            <div class="analyzer-header">
                <h2 class="analyzer-title">🏈 Team SEO + AI Gap Analyzer</h2>
                <p class="analyzer-subtitle">Analyze your team's search presence and discover revenue opportunities being captured by competitors in both traditional search and AI responses</p>
            </div>

            <form id="analyzeForm">
                <div class="form-grid">
                    <div>
                        <div class="form-group">
                            <label class="form-label" for="teamName">Team Name</label>
                            <input type="text" id="teamName" name="teamName" class="form-input" 
                                   placeholder="Duke Blue Devils" required>
                            <div class="team-suggestions">
                                <span class="suggestions-label">Popular teams:</span>
                                <div class="team-pills">
                                    <span class="team-pill" onclick="selectTeam('Duke Blue Devils')">Duke Blue Devils</span>
                                    <span class="team-pill" onclick="selectTeam('UNC Tar Heels')">UNC Tar Heels</span>
                                    <span class="team-pill" onclick="selectTeam('Michigan Wolverines')">Michigan Wolverines</span>
                                    <span class="team-pill" onclick="selectTeam('Alabama Crimson Tide')">Alabama Crimson Tide</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="form-group">
                            <label class="form-label" for="sport">Primary Sport</label>
                            <select id="sport" name="sport" class="form-input" required>
                                <option value="">Select Sport</option>
                                <option value="football">Football</option>
                                <option value="basketball">Basketball</option>
                                <option value="baseball">Baseball</option>
                                <option value="soccer">Soccer</option>
                                <option value="volleyball">Volleyball</option>
                                <option value="hockey">Hockey</option>
                                <option value="lacrosse">Lacrosse</option>
                                <option value="tennis">Tennis</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label" for="email">Email Address</label>
                    <input type="email" id="email" name="email" class="form-input" 
                           placeholder="athletics@university.edu" required>
                </div>

                <button type="submit" class="ai-analyze-btn" id="analyzeBtn">
                    <div class="ai-loading-spinner" id="loadingSpinner"></div>
                    <span id="btnText">🚀 Analyze SEO + AI Gaps</span>
                </button>
            </form>
        </div>

        <!-- Results Section -->
        <div id="results" class="ai-results" style="display: none;">
            <!-- Results will be populated by JavaScript -->
        </div>
    </div>

    <script>
        let isAnalyzing = false;

        function selectTeam(teamName) {
            document.getElementById('teamName').value = teamName;
        }

        function showLoading() {
            isAnalyzing = true;
            const btn = document.getElementById('analyzeBtn');
            const spinner = document.getElementById('loadingSpinner');
            const btnText = document.getElementById('btnText');
            
            btn.disabled = true;
            spinner.style.display = 'inline-block';
            btnText.textContent = 'Analyzing SEO + AI Intelligence...';
        }

        function hideLoading() {
            isAnalyzing = false;
            const btn = document.getElementById('analyzeBtn');
            const spinner = document.getElementById('loadingSpinner');
            const btnText = document.getElementById('btnText');
            
            btn.disabled = false;
            spinner.style.display = 'none';
            btnText.textContent = '🚀 Analyze SEO + AI Gaps';
        }

        function showError(message) {
            const results = document.getElementById('results');
            results.innerHTML = `<div class="error">❌ ${message}</div>`;
            results.style.display = 'block';
        }

        function displayResults(data) {
            const results = document.getElementById('results');
            const statusBadge = data.meta.realDataPoints > 0 ? 
                '<span class="ai-status-badge live">🔴 LIVE DATA</span>' : 
                '<span class="ai-status-badge simulated">🟡 MARKET ANALYSIS</span>';

            let resultsHTML = `
                <div class="results-header">
                    <h2 class="results-title">🎯 SEO + AI Gap Analysis Results</h2>
                    <p class="results-subtitle">${data.teamName} • ${data.sport} ${statusBadge}</p>
                </div>

                <div class="ai-summary-grid">
                    <div class="ai-summary-card">
                        <div class="summary-value">${data.analyses.length}</div>
                        <div class="summary-label">Opportunities Found</div>
                    </div>
                    <div class="ai-summary-card">
                        <div class="summary-value">${data.summary.aiCitationGaps || 0}</div>
                        <div class="summary-label">AI Citation Gaps</div>
                    </div>
                    <div class="ai-summary-card">
                        <div class="summary-value">${data.summary.totalSearchVolume.toLocaleString()}</div>
                        <div class="summary-label">Monthly Search Volume</div>
                    </div>
                    <div class="ai-summary-card">
                        <div class="summary-value">${data.summary.highOpportunity}</div>
                        <div class="summary-label">High-Priority Gaps</div>
                    </div>
                    <div class="ai-summary-card">
                        <div class="summary-value">${data.summary.teamAICitations || 0}</div>
                        <div class="summary-label">Team AI Citations</div>
                    </div>
                    <div class="ai-summary-card">
                        <div class="summary-value">${Math.round(data.meta.processingTimeMs / 1000)}s</div>
                        <div class="summary-label">Analysis Time</div>
                    </div>
                </div>
            `;

            if (data.analyses.length > 0) {
                resultsHTML += '<h3 style="color: #3a7bd5; margin-bottom: 30px; font-size: 1.5rem;">🔍 Revenue Opportunities</h3>';
                
                data.analyses.forEach((analysis, index) => {
                    const isAIGap = analysis.aiOverview && analysis.aiOverview.isAIGap;
                    const cardClass = isAIGap ? 'ai-opportunity-card ai-citation-gap' : 'ai-opportunity-card';
                    
                    resultsHTML += `
                        <div class="${cardClass}">
                            <div class="opportunity-header">
                                <div style="display: flex; align-items: flex-start;">
                                    <div class="priority-badge">${index + 1}</div>
                                    <div class="opportunity-info">
                                        <div class="opportunity-keyword">"${analysis.keyword}"</div>
                                        <div class="opportunity-type">${analysis.gapType} • Team Rank: ${analysis.teamRank}</div>
                                    </div>
                                </div>
                                <div class="ai-score">Score: ${analysis.opportunity}/10</div>
                            </div>
                            
                            <div class="opportunity-details">
                                <div class="detail-card">
                                    <div class="detail-title">Gap Analysis</div>
                                    <div class="detail-content">${analysis.gapReason}</div>
                                </div>
                                <div class="detail-card">
                                    <div class="detail-title">Revenue Impact</div>
                                    <div class="detail-content">${analysis.revenueImpact}</div>
                                </div>
                                <div class="detail-card">
                                    <div class="detail-title">Search Volume</div>
                                    <div class="detail-content">${analysis.searchVolume.toLocaleString()} monthly searches</div>
                                </div>
                                <div class="detail-card">
                                    <div class="detail-title">Content Suggestion</div>
                                    <div class="detail-content">${analysis.contentSuggestion.title} - ${analysis.contentSuggestion.format}</div>
                                </div>
                            </div>

                            ${analysis.competitors.length > 0 ? `
                                <div style="margin-top: 20px;">
                                    <div class="detail-title">Top Competitors</div>
                                    <div class="detail-content">
                                        ${analysis.competitors.map(comp => `#${comp.rank}: ${comp.domain}`).join(' • ')}
                                    </div>
                                </div>
                            ` : ''}

                            ${analysis.aiOverview && analysis.aiOverview.hasAIOverview ? `
                                <div class="ai-overview-section">
                                    <div class="ai-overview-title">
                                        🤖 Google AI Overview Analysis
                                    </div>
                                    
                                    <div class="ai-citation-status">
                                        ${analysis.aiOverview.teamCited ? 
                                            '<span class="citation-badge cited">✅ Team Cited</span>' : 
                                            '<span class="citation-badge not-cited">❌ Team Not Cited</span>'
                                        }
                                        ${analysis.aiOverview.competitorsCited.length > 0 ? 
                                            `<span class="citation-badge not-cited">${analysis.aiOverview.competitorsCited.length} Competitor(s) Cited</span>` : 
                                            ''
                                        }
                                    </div>

                                    ${analysis.aiOverview.citedText ? `
                                        <div class="cited-text">
                                            <strong>Team Citation:</strong> "${analysis.aiOverview.citedText}"
                                        </div>
                                    ` : ''}

                                    ${analysis.aiOverview.competitorsCited.length > 0 ? `
                                        <div class="competitor-citations">
                                            <strong>Competitor Citations:</strong>
                                            ${analysis.aiOverview.competitorsCited.map(comp => `
                                                <div class="competitor-citation">
                                                    <div class="competitor-domain">${comp.domain}</div>
                                                    <div class="competitor-quote">"${comp.quotedText}"</div>
                                                </div>
                                            `).join('')}
                                        </div>
                                    ` : ''}
                                </div>
                            ` : ''}
                        </div>
                    `;
                });

                resultsHTML += `
                    <div class="ai-insights">
                        <h3 class="insights-title">🧠 AI-Powered Insights</h3>
                        <div class="insight-item">
                            <strong>Revenue Opportunity:</strong> ${data.summary.highOpportunity} high-priority gaps could generate significant ticket revenue by outranking resellers.
                        </div>
                        ${data.summary.aiCitationGaps > 0 ? `
                            <div class="insight-item">
                                <strong>AI Citation Gap Alert:</strong> ${data.summary.aiCitationGaps} keyword(s) where competitors are cited in Google's AI Overview instead of your official sources.
                            </div>
                        ` : ''}
                        <div class="insight-item">
                            <strong>Quick Wins:</strong> Focus on ticket-related keywords where your official site isn't ranking in the top 3 positions or getting AI citations.
                        </div>
                        <div class="insight-item">
                            <strong>Strategy:</strong> Create dedicated landing pages with structured data and clear authority signals to improve both traditional rankings and AI citation opportunities.
                        </div>
                    </div>
                `;
            } else {
                resultsHTML += `
                    <div class="loading">
                        🎉 Great news! Your team appears to be well-optimized for the analyzed keywords. 
                        Try analyzing different sports or competitor teams for more insights.
                    </div>
                `;
            }

            results.innerHTML = resultsHTML;
            results.style.display = 'block';
            results.scrollIntoView({ behavior: 'smooth' });
        }

        document.getElementById('analyzeForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            if (isAnalyzing) return;

            const formData = new FormData(e.target);
            const data = {
                teamName: formData.get('teamName'),
                sport: formData.get('sport'),
                email: formData.get('email')
            };

            if (!data.teamName || !data.sport || !data.email) {
                showError('Please fill in all required fields');
                return;
            }

            showLoading();

            try {
                const response = await fetch('/api/analyze', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    displayResults(result);
                } else {
                    showError(result.error || 'Analysis failed. Please try again.');
                }
            } catch (error) {
                console.error('Analysis error:', error);
                showError('Network error. Please check your connection and try again.');
            } finally {
                hideLoading();
            }
        });

        // Health check on page load
        window.addEventListener('load', async () => {
            try {
                const response = await fetch('/api/health');
                const health = await response.json();
                console.log('🏥 Health Check:', health);
                if (health.features && health.features.aiOverviewAnalysis) {
                    console.log('🤖 AI Overview Analysis: ENABLED');
                }
            } catch (error) {
                console.error('❌ Health check failed:', error);
            }
        });
    </script>
</body>
</html>
